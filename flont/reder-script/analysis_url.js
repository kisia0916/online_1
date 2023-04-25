const analysis_url = ()=>{
    let url = location.pathname
    let url_list = url.split("/")
    console.log(url_list)
    if(url_list[1] == "game" && user_state == 2){
        write_game_page()

    }else if(user_state != 2 && url_list[1] == ""){
        write_title_page()

        history.replaceState('','',"/");
    }else if(user_state == 3 && url_list[1] == "mkroom"){
        write_mkroom_page()
        history.replaceState('','',"/mkroom");
    }
    else if(user_state == 4 && url_list[1] == "join"){
        write_join_private_page()
        history.replaceState('','',"/join");
    }else if(user_state == 2){

        write_game_page()
        history.replaceState('','',"/game");
    }else{
        console.log("kokokokkokoko")
        write_title_page()
        history.replaceState('','',"/");
    }
}
analysis_url()