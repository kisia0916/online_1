/////////////////////////////////////タイマーの色のバグがある


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
    let roomNameDom = document.querySelector(".host_name_input")
    let turn_timer1Dom = document.querySelector(".time_select")
    let turn_timer2Dom = document.querySelector(".time_select2")
    let color_selectDom = document.querySelector(".color_select3")

    let roomName = roomNameDom.value
    let turn_timer1 = turn_timer1Dom.value
    let turn_timer2 = turn_timer2Dom.value
    let color_select = color_selectDom.value
    if(roomName){
        let co = 0
        if(turn_timer1 == "0"){
            co+=1
        }
        if(turn_timer2 == "00"){
            turn_timer2 = 0
            co+=1

        }
        if(co < 2){
            let time = Number(turn_timer1)*60+Number(turn_timer2)
            console.log(time)

            console.log(roomName)
            Socket.emit("mkroom_emit",{userId:userId,name:user_name,room_name:roomName,turn_time:time,color:color_select})
            move("privateroom")
        }else{
            turn_timer1Dom.style.backgroundColor = "rgba(251,143,143,0.79)"
            turn_timer1Dom.style.border = "2px soild rgba(91,91,91,0.79)"
            turn_timer2Dom.style.backgroundColor = "rgba(251,143,143,0.79)"
            turn_timer2Dom.style.border = "2px soild rgba(91,91,91,0.79)"
        }
    }else if(!roomName){
        roomNameDom.style.backgroundColor = "rgba(251,143,143,0.79)"
        roomNameDom.style.border = "2px soild rgba(91,91,91,0.79)"
    }
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
    let data1 = document.querySelector(".join_room_input")
    let data = data1.value
    console.log("ppppppppppppp")
    if(data){
        data = data.replace(/[&'`"<>]/g, function(match) {
            return {
              '&': '&amp;',
              "'": '&#x27;',
              '`': '&#x60;',
              '"': '&quot;',
              '<': '&lt;',
              '>': '&gt;',
            }[match]
          });
        Socket.emit("join_room",{roomId:data,userId:userId,name:name})
    }else{
        data1.style.backgroundColor = "rgba(251,143,143,0.79)"
        data1.style.border = "2px soild rgba(91,91,91,0.79)"
    }
}
const join_room_url = (id)=>{
    let data1 = document.querySelector(".urlJoinInput")
    let name = data1.value

    if(name){
        name = name.replace(/[&'`"<>]/g, function(match) {
            return {
              '&': '&amp;',
              "'": '&#x27;',
              '`': '&#x60;',
              '"': '&quot;',
              '<': '&lt;',
              '>': '&gt;',
            }[match]
          });
          user_name = name
        Socket.emit("join_room",{roomId:id,userId:userId,name:name})
    }else{
        data1.style.backgroundColor = "rgba(251,143,143,0.79)"
        data1.style.border = "2px soild rgba(91,91,91,0.79)"
    }
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