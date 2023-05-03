const analysis_url = ()=>{

    let url = location.pathname
    let url_list = url.split("/")
    console.log(url_list)
    // move_mist()

    if(url_list[1] == "game" && user_state == 2){
        write_game_page()
        // window.history.pushState(null,"test",location.pathname)

    }else if(user_state== 0 && url_list[1] == ""){
        write_title_page()

        history.replaceState('','',"/");
        // window.history.pushState(null,"top",location.pathname)


    }else if(user_state == 3 && url_list[1] == "mkroom"){
        write_mkroom_page()
        history.replaceState('','',"/mkroom");
        // window.history.pushState(null,"mkroom",location.pathname)

    }
    else if(user_state == 4 && url_list[1] == "join"){
        write_join_private_page()
        history.replaceState('','',"/join");
    // window.history.pushState(null,"test",location.pathname)

    }else if(user_state == 1 && url_list[1] == "waitmatch"){
        write_wait_publick_match()
        history.replaceState('','',"/waitmatch");

    }else if(user_state == 5 && url_list[1] == "offline"){
        write_offline_mode()
        history.replaceState('','',"/offline");
        // window.history.pushState(null,"test",location.pathname)

    }else if(user_state == 2){

        write_game_page()
        history.replaceState('','',"/game");
    // window.history.pushState(null,"test",location.pathname)

    }else{
        console.log("kokokokkokoko")
        write_title_page()
        history.replaceState('','',"/");
    // window.history.pushState(null,"test",location.pathname)

    }
    let mist = document.querySelector(".move_mist")
    console.log(mist)
    mist.addEventListener('animationend', () => {
    // アニメーション終了後に実行する内容
    mist.remove()

})
}
analysis_url()
window.addEventListener('popstate', function(e) {
    console.log("test")


    analysis_url()
    // window.history.pushState(null,"wait",location.pathname)

}) 