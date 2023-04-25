const write_game_page = ()=>{
    let space = document.querySelector(".main_space")
    space.innerHTML = game_dom()
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