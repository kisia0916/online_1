
Socket.on("set_data",(data)=>{
    userId = data.userId
})

Socket.on("start_game",(data)=>{
    roomId = data.roomId
    p1 = data.p1
    p2 = data.p2
    black = data.black
    white = data.white
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
        checkPutSpace()
    }
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