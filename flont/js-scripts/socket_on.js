
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
    stage.map = data.stage
    now_turn = data.now_turn
    turn.n = data.now_turn

})
Socket.on("koko",(data)=>{
    console.log(data)
})