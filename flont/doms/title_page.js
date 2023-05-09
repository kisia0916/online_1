const title_dom = ()=>{
    let html = `
    <div class="move_mist" id = "move_mist">
        
    </div>
    <div class="main_warpp">

        <div class="main_space2">

            <div class="top">
                <div class="title_text">
                    <div class="title_main">
                        <div class = "title_text_1">
                            <span class="title_black">O</span>
                            <span class="title_white">N</span>
                            <span class="title_black">L</span>
                            <span class="title_white">I</span>
                            <span class="title_black">N</span>
                            <span class="title_white">E</span>
                        </div>
                        <div class="title_text_2">
                            <span class="title_white">R</span>
                            <span class="title_black">E</span>
                            <span class="title_white">V</span>
                            <span class="title_black">E</span>
                            <span class="title_white">R</span>
                            <span class="title_black">S</span>
                            <span class="title_white">I</span>
                        </div>
                    </div>
                    <span class="material-symbols-outlined menu">
                        menu
                    </span>
                </div>

            </div>
            <div class="mode_buttons">
                <div class="button1" onclick="offline_page()">
                    <span class="button1_text">PlayOffline</span>
                </div>

                <div class="button2" onclick="start_matching()">
                    <span class="button2_text">PlayOnline</span>
                    <div class="online_user_num">
                        <span class="material-symbols-outlined human_num">
                        person
                        </span>
                        <span class="human_num_text">10</span>
                    </div>
                </div>

                <div class="button1" onclick="mk_room_setting()">
                    <span class="button1_text">MakeRoom</span>

                </div>
                <div class="button2" onclick="join_page()">
                    <span class="button2_text">JoinRoom</span>

                </div>
            </div>
        </div>

        <div class="bottom">
            <span>©onlineriversi madeBy fumi</span>
        </div>

        </div>

    </div>


    `
    return html
}