

const write_game_page = ()=>{
    let space = document.querySelector(".main_space")
    space.innerHTML = game_dom(black_name,white_name)
}
const write_title_page = ()=>{
    let space = document.querySelector(".main_space")
    let hop_up_space = document.querySelector(".hop_up_space")
    space.innerHTML = title_dom()
    // hop_up_space.innerHTML = hop_up_result_dom()

}
const write_mkroom_page = ()=>{
    let space = document.querySelector(".main_space")
    space.innerHTML = mkroom_dom()
}
const write_join_private_page = ()=>{
    user_state = 3
    let space = document.querySelector(".main_space")
    space.innerHTML = inputRoom_dom()
}
const write_wait_publick_match = ()=>{
    let space = document.querySelector(".main_space")
    space.innerHTML = wait_online_dom()
}
const write_offline_mode = ()=>{
    let space = document.querySelector(".main_space")
    space.innerHTML = offline_dom()
}
const write_wait_private = ()=>{
    let space = document.querySelector(".main_space")
    space.innerHTML = wait_private_dom()
}
const write_url_join = (id)=>{
    Socket.emit("send_set_data","")
    let space = document.querySelector(".main_space")
    space.innerHTML = url_join_dom(id)
}
const write_modeselect = (id)=>{
    let space = document.querySelector(".main_space")
    space.innerHTML = modeselect_dom()
    Socket.emit("move_modepage","")
}