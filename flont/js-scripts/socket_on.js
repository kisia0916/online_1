


Socket.on("set_data",(data)=>{
    userId = data.userId
})

Socket.on("start_game",(data)=>{
    roomId = data.roomId
    p1 = data.p1
    p2 = data.p2
    black = data.black
    white = data.white
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
    move("game")
    stage.map =data.stage
    now_turn = data.now_turn
    now_timer = 121
    start_timer("id")
    turn.n = now_turn


    game_start()
    // start_timer()
    main_loop()
    // checkPutSpace()
})
Socket.on("join_game_ser",(data)=>{
    roomId = data.roomId
    p1 = data.p1
    p2 = data.p2
    black = data.black
    white = data.white
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
    move("game")
    now_timer = 121
    start_timer("id")
    stage.map = data.stage
    now_turn = data.now_turn
    turn.n = now_turn




    game_start()
    // start_timer()
    main_loop()
    // checkPutSpace()

})
Socket.on("end_game",(data)=>{
    Socket.emit("end_game",{room:roomId})
    init_data()
    user_state = 0
    console.log("oooooooooooooooooooooooo")
    move("")
}) 
Socket.on("get_new_stage",(data)=>{
    console.log("ooooooooooooooooooooooo")

    timer_stop_flg = true

    now_timer = 121
    timer_stop_flg = false
    // start_timer()
    // clearInterval(start_timer)
	let timer_text = document.querySelector(".turn_timer_text")
    change_turn = true

    if(change_turn){
        if(text_color == "black"){
            timer_text.style.color = "rgb(221, 238, 224)"
            timer_text.textContent = "2:00"
            // timer_warpp.style.border = "solid 1px rgb(221, 238, 224)"

            text_color = "white"
        }else if(text_color == "white"){
            timer_text.style.color = "rgb(56, 56, 56)"
            timer_text.textContent = "2:00"

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
                    let end_stage = check_win()
                    let mess = ""
                    if(end_stage[0] > end_stage[1]){
                        if(my_color == "black"){
                            mess = "あなたの勝ちです"
                        }else{
                            mess = "あなたの負けです"
                        }
                    }
                    ctx.clearRect(0,0,600,600)
                    write_stage()
                
                    writePiece()
                    console.log(stage.map)

                    // alert(`ゲーム終了\n${mess}\nblack:${end_stage[0]} white:${end_stage[1]}`)
                    // Socket.emit("end_game_broad",roomId)
                    user_state = 0
                    // move("")


                }else{
                    alert("パスｓ")
                    pass_counter +=1

                    setPiece_pass()
                }
            }else{
                pass_counter = 0

                checkPutSpace()
            }
        }else{

            Socket.emit("end_game",{room:roomId})
            let end_stage = check_win()
            let mess = ""

            if(end_stage[0] > end_stage[1]){
                if(my_color == "black"){
                    mess = "あなたの勝ちです"
                }else{
                    mess = "あなたの負けです"
                }
            }
            ctx.clearRect(0,0,600,600)
            write_stage()
        
            writePiece()
        // console.log(stage.map)

        //     alert(`ゲーム終了\n${mess}\nblack:${end_stage[0]} white:${end_stage[1]}`)
            user_state = 0
            // move("")
        }

}
})

Socket.on("end_room",(data)=>{
    ctx.clearRect(0,0,600,600)
    write_stage()

    writePiece()
        Socket.emit("end_game",{room:roomId})
        Socket.emit("delete_cons",{room:roomId})
        let end_stage = check_win()
        let mess = ""
        if(end_stage[0] > end_stage[1]){
            if(my_color == "black"){
                mess = "あなたの勝ちです"
            }else{
                mess = "あなたの負けです"
            }
        }
    //     ctx.clearRect(0,0,600,600)
    //     write_stage()
    
    //     writePiece()
    //     console.log(stage.map)

    // alert(`ゲーム終了\n${mess}\nblack:${end_stage[0]} white:${end_stage[1]}`)
    user_state = 0
    // move("")
})
Socket.on("send_private_id",(data)=>{
    console.log("ooooo")
    console.log(data.roomId)
    roomId = data.roomId
    let id_space = document.querySelector(".RoomID")
    let url_space = document.querySelector(".joinURL")
    let button1 = document.querySelector(".room_copy1")
    let button2 = document.querySelector(".room_copy2")
    button1.id = roomId
    button2.id = domain+"/urljoin/"+roomId
    url_space.textContent = domain+"/urljoin/"+roomId
    id_space.textContent = roomId
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