


const start_matching = ()=>{
    console.log(user_state)
    if(user_state != 1){
        console.log("test")
        user_state = 1
        move("waitmatch")
        console.log(p2pId)
        Socket.emit("join_matching",{userId:userId,p2pId:p2pId})
    }
}
const send_stage = ()=>{
    console.log("00000000000000000000")
    if(user_state == 2){
        Socket.emit("send_stage",{stage:stage.map,roomId:roomId,send_user:userId,now_turn:now_turn,pass_counter:pass_counter})
    }
}

const mk_room = ()=>{
    user_state = 3.5
    Socket.emit("mkroom_emit",{userId:userId})
    move("privateroom")
}
const join_page = ()=>{
    user_state = 4
    move("join")
}
const mk_room_setting = ()=>{
    user_state = 3
    move("mkroom")
}
const offline_page = ()=>{
    user_state = 5
    move("offline")
}
const mode_page = ()=>{
    user_state = 0.5
    let input = document.querySelector(".setUserName")
    user_name = input.value

    if(user_name){
        user_name = user_name.replace(/[&'`"<>]/g, function(match) {
            return {
              '&': '&amp;',
              "'": '&#x27;',
              '`': '&#x60;',
              '"': '&quot;',
              '<': '&lt;',
              '>': '&gt;',
            }[match]
          });
        move("modeselect")
    }else{
        input.style.backgroundColor = "rgba(251,143,143,0.79)"
        input.style.border = "2px soild rgba(91,91,91,0.79)"
    }
}

const join_room = ()=>{
    let data = document.querySelector(".join_room_input").value
    Socket.emit("join_room",{roomId:data,userId:userId})
}
const join_room_url = (id)=>{
    Socket.emit("join_room",{roomId:id,userId:userId})
}
const discon_watch = (next_state)=>{
    Socket.emit("discon_match",{userId:userId})
    user_state = next_state
}
const remove_private_match = (roomId)=>{
    Socket.emit("remove_private_match",{roomId:roomId})
}
const remove_online_match = () =>{
    
}
const discon_p2p_sokcet = (userId)=>{
    Socket.emit("discon_p2p_socket",{userId:userId})
    conn = undefined
}