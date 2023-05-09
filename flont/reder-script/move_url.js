const move = (url)=>{
    history.replaceState('','',`/${url}`);
    analysis_url()

}
const move_back = (url,next_state)=>{
    if(user_state == 3.5){
        remove_private_match(roomId)
    }

    discon_watch(next_state)

    history.replaceState('','',`/${url}`);
    analysis_url()
}