const start_matching = ()=>{
    if(user_state != 1){
        user_state = 1
        Socket.emit("join_matching",{userId:userId})
    }
}
const send_stage = ()=>{
    console.log("00000000000000000000")
    if(user_state == 2){
        Socket.emit("send_stage",{stage:stage.map,roomId:roomId,send_user:userId,now_turn:now_turn,pass_counter:pass_counter})
    }
}