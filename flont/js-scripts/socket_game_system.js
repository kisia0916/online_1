const start_game_fun = (data)=>{
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
    start_timer("id")
    turn.n = now_turn


    game_start()
    // start_timer()
    main_loop()
    // checkPutSpace()
}
const join_game_fun = ()=>{
    console.log("join実行中")

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

    start_timer("id")
    now_turn = data.now_turn

    stage.map = data.stage
    turn.n = now_turn




    game_start()
    // start_timer()
    main_loop()
    // checkPutSpace()
}