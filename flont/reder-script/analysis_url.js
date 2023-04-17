const analysis_url = ()=>{
    let url = location.pathname
    let url_list = url.split("/")
    console.log(url_list)
    if(url_list[1] == "game" && user_state == 2){
        write_game_page()

    }else if(user_state != 2){
        write_title_page()
        history.replaceState('','',"/");
    }else{
        write_game_page()
        history.replaceState('','',"/game");
    }
}
analysis_url()