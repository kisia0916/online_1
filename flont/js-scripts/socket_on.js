


Socket.on("set_data",(data)=>{
    userId = data.userId
    Socket.emit("set_info",{userId:userId,p2pId:p2pId,name:user_name})

    let url = location.pathname
    let url_list = url.split("/")
    console.log(url_list)
    if(url_list[1] == "urljoin"){
        console.log("lplplplplplplp")

        console.log("lplplplplplplp")
        Socket.emit("reqest_send_roomName",{id:url_list[2],userId:userId})
    }
    
})
Socket.on("response_send_roomName",(data)=>{
    room_name = data.room_name
    let room_text = document.querySelector(".join_room_title_text")
    room_text.textContent = room_name
    console.log(data.room_name)
})
Socket.on("start_game",(data)=>{
    game_con_co = false
    console.log("start実行中")
    roomId = data.roomId
    if(data.turn_time){
        turn_time = data.turn_time
        now_timer = turn_time
        console.log(now_timer)

    }else{
        turn_time = 121
        now_timer = turn_time
        console.log(now_timer)

    }
    console.log(now_turn)
    p1 = data.p1
    p2 = data.p2
    black = data.black
    white = data.white
    // now_timer = data.turn_time
    console.log("klklklklklklklklklklklklklklklklkl")
    console.log(data)
    connection_p2p(data.other_p2p_Id)
    pass_counter = data.pass_counter
    console.log(roomId,p1,p2,black,white)
    user_state = 2
    Socket.emit("join_match",{roomId:roomId})
    my_turn = data.my_color
    if(data.black == userId){

        console.log("black")
        my_color = "black"
    }else if(data.white == userId){
        my_color = "white"
        console.log("white")
    }
    black_name = data.black_name
    white_name = data.white_name
    move("game")
    stage.map =data.stage
    now_turn = data.now_turn
    // now_timer = 121
    // start_timer("id")
    turn.n = now_turn


    // game_start()
    // // start_timer()
    // main_loop()
    // checkPutSpace()
})
Socket.on("join_game_ser",(data)=>{
    console.log("join実行中")
    game_con_co = false

    roomId = data.roomId
    if(data.turn_time){
        turn_time = data.turn_time
        now_timer = turn_time
        console.log(now_timer)
    }else{
        turn_time = 121
        now_timer = turn_time
        console.log(now_timer)
}
    
    console.log(now_turn)

    p1 = data.p1
    p2 = data.p2
    black = data.black
    white = data.white
    // now_timer = data.turn_time

    console.log(data)

    connection_p2p(data.other_p2p_Id)

    pass_counter = data.pass_counter

    Socket.emit("join_match",{roomId:roomId})
    console.log(roomId,p1,p2,black,white)
    user_state = 2
    my_turn = data.my_color
    if(data.black == userId){
        console.log("black")
        my_color = "black"
    }else if(data.white == userId){
        my_color = "white"
        console.log("white")
    }
    black_name = data.black_name
    white_name = data.white_name
    move("game")
    // now_timer = data.turn_time

    // start_timer("id")
    now_turn = data.now_turn

    stage.map = data.stage
    turn.n = now_turn




    // game_start()
    // // start_timer()
    // main_loop()
    // checkPutSpace()

})
Socket.on("end_game",(data)=>{
    Socket.emit("end_game",{room:roomId})
    init_data()
    user_state = 0
    console.log("oooooooooooooooooooooooo")
    move("")
    discon_p2p()
}) 
Socket.on("get_new_stage",(data)=>{
    
    console.log("ooooooooooooooooooooooo")

    timer_stop_flg = true

    now_timer = turn_time
    timer_stop_flg = false
    stop_timer()
    start_timer()
    // start_timer()
    // clearInterval(start_timer)
	let timer_text = document.querySelector(".turn_timer_text")
    change_turn = true

    if(change_turn){
        if(text_color == "black"){
            timer_text.style.color = "rgb(221, 238, 224)"
            timer_text.textContent = "..."
            // timer_warpp.style.border = "solid 1px rgb(221, 238, 224)"

            text_color = "white"
        }else if(text_color == "white"){
            timer_text.style.color = "rgb(56, 56, 56)"
            timer_text.textContent = "..."

            // timer_warpp.style.border = "solid 1px rgb(56, 56, 56)"

            text_color = "black"

        }
        change_turn = false
    }

    // let timer_text = document.querySelector(".turn_timer_text")
    // if(text_color == "black"){
    //     console.log("uououo")
    //     // timer_text.style.color = "rgb(56, 56, 56)"
    //     text_color = "white"
    // }else if(text_color == "white"){
    //     console.log("uououo")

    //     // timer_text.style.color = "rgb(221, 238, 224)"
    //     text_color = "black"
    // }
	// if(data.now_turn == 1){
	// 	text_color = "rgb(56, 56, 56)"

	// 	timer_text.style.color = text_color

	// }else if(data.now_turn == 2){
	// 	text_color = "rgb(221, 238, 224)"

	// 	timer_text.style.color = text_color
	// }
	
    if(turn.n != data.now_turn){
        stage.map = data.stage

        now_turn = data.now_turn
        turn.n = data.now_turn
        count_chips()/////////////////////////
        console.log("lplplp")
        for(let i = 0;stage_height>i;i++){
            for(let s = 0;stage_width>s;s++){
                if(stage.map[i][s] == 3){
                    stage.map[i][s] = 0
                }
            }
        }

        if(check_win()[2] == false){
            if(checkPutSpace() !=1){
                if(pass_counter == 1){

                    Socket.emit("end_game",{room:roomId})
                    discon_p2p()
                    stop_timer()
                    let end_stage = check_win()
                    let mess = ""

                    game_con_Co = 1
                    ctx.clearRect(0,0,600,600)

                    write_stage()
                    writePiece()
                    if(end_stage[0] > end_stage[1]){
                        if(my_color == "black"){
                            mess = "あなたの勝ちです"
                            win_write_12(end_stage[0],end_stage[1])

                        }else{
                            mess = "あなたの負けです"
                            lose_write_12(end_stage[0],end_stage[1])
                        }
                    }else if(end_stage[0]< end_stage[1]){
                        if(my_color == "white"){
                            mess = "あなたの勝ちです"
                            win_write_12(end_stage[0],end_stage[1])

                        }else{
                            mess = "あなたの負けです"
                            lose_write_12(end_stage[0],end_stage[1])
                        }
                    }
                    console.log(stage.map)

                    // alert(`ゲーム終了\n${mess}\nblack:${end_stage[0]} white:${end_stage[1]}`)
                    // Socket.emit("end_game_broad",roomId)
                    user_state = 0
                    // move("")


                }else{
                    let chips = count_chips()
                    if(chips[1] != 0 && chips[0] != 0){
                        pass_counter +=1
                        setPiece_pass()

                        alert("パス")
                    }else{
                        pass_counter +=1
                        setPiece_pass()
                    }

                }
            }else{
                pass_counter = 0

                checkPutSpace()
            }
        }else{

            Socket.emit("end_game",{room:roomId})
            discon_p2p()
            stop_timer()
            let end_stage = check_win()
            let mess = ""


            game_end_Co = 1
            ctx.clearRect(0,0,600,600)
            write_stage()
            writePiece()
            if(end_stage[0] > end_stage[1]){
                if(my_color == "black"){
                    mess = "あなたの勝ちです"
                    win_write_12(end_stage[0],end_stage[1])

                }else{
                    mess = "あなたの負けです"
                    lose_write_12(end_stage[0],end_stage[1])
                }
            }else if(end_stage[0]< end_stage[1]){
                if(my_color == "white"){
                    mess = "あなたの勝ちです"
                    win_write_12(end_stage[0],end_stage[1])

                }else{
                    mess = "あなたの負けです"
                    lose_write_12(end_stage[0],end_stage[1])
                }
            }
        // console.log(stage.map)

        //     alert(`ゲーム終了\n${mess}\nblack:${end_stage[0]} white:${end_stage[1]}`)
            user_state = 0
            // move("")
        }

}
})
Socket.on("completion_preparation_on",(data)=>{
    console.log(data)
    let prepar_screen = document.querySelector(".first_name_warpp")
    prepar_screen.classList.add("first_fade_out")
    let anime = document.querySelector(".first_fade_out")
    anime.addEventListener("animationend",()=>{
        // prepar_screen.style.visibility= "hidden";
        let first_warpp_main = document.querySelector(".first_screen_main")
        first_warpp_main.remove()
    })
    start_timer("id")
    game_start()
    main_loop()
})
Socket.on("other_preparation_on",(data)=>{
    
})
Socket.on("end_room",(data)=>{

        Socket.emit("end_game",{room:roomId})
        Socket.emit("delete_cons",{room:roomId})
        discon_p2p()
        stop_timer()
        let end_stage = check_win()
        let mess = ""


        // init_game()
        game_end_Co = 1
        ctx.clearRect(0,0,600,600)
        write_stage()
        writePiece()
        if(end_stage[0] > end_stage[1]){
            if(my_color == "black"){
                mess = "あなたの勝ちです"
                //////////////////////////////////////////////////たまに勝利判定がされない時があるかも
                win_write_12(end_stage[0],end_stage[1])

            }else{
                mess = "あなたの負けです"
                lose_write_12(end_stage[0],end_stage[1])
            }
        }else if(end_stage[0]< end_stage[1]){
            if(my_color == "white"){
                mess = "あなたの勝ちです"
                win_write_12(end_stage[0],end_stage[1])

            }else{
                mess = "あなたの負けです"
                lose_write_12(end_stage[0],end_stage[1])
            }
        }
    //     console.log(stage.map)

    // alert(`ゲーム終了\n${mess}\nblack:${end_stage[0]} white:${end_stage[1]}`)
    // user_state = 0
    // move("")
})
Socket.on("send_private_id",(data)=>{
    console.log("ooooo")
    console.log(data.roomId)
    roomId = data.roomId
    let domain = "localhost:3000"
    let id_space = document.querySelector(".joinID12")
    let url_space = document.querySelector(".joinURL12")
    let button1 = document.querySelector(".room_copy1")
    let button2 = document.querySelector(".room_copy2")
    button1.id = roomId
    button2.id = domain+"/urljoin/"+roomId
    url_space.value = domain+"/urljoin/"+roomId
    id_space.value = roomId
})
Socket.on("no_room",(data)=>{
    alert("No Room")
})
Socket.on("koko",(data)=>{
    console.log(data)
})
Socket.on("mess",(data)=>{
    console.log("----------------------------")
})
Socket.on("test1",(data)=>{
    alert(data)
})
Socket.on("discon_p2p",(data)=>{
    conn = undefined
    console.log("切断しました")
})
Socket.on("return_send_name",(data)=>{
    console.log("Kop")
    let name_space = document.querySelector(".join_room_title_text")
    name_space.textContent = data.name
})