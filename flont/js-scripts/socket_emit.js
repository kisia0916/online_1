


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
const mk_room = ()=>{
    user_state = 3
    Socket.emit("mkroom_emit",{userId:userId})
    move("mkroom")
}
const join_page = ()=>{
    user_state = 4
    move("join")
}

const join_room = ()=>{
    let data = document.querySelector(".join_room_input").value
    Socket.emit("join_room",{roomId:data,userId:userId})
}