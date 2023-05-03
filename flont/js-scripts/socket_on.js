


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
    turn.n = now_turn


    game_start()

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
    stage.map = data.stage
    now_turn = data.now_turn
    turn.n = now_turn




    game_start()
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
    let id_space = document.getElementById("room_ID")
    id_space.value = `${roomId}`
})
Socket.on("no_room",(data)=>{
    let mess = document.querySelector(".room_message")
    mess.textContent = "roomがありません"
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