const title_dom = ()=>{
    let html = `
    <div class="move_mist" id = "move_mist">
        
    </div>
    <div class="title_text_main">
    <div class="title_text_top">
        <div class="title_text_warpp_12">
            <span class="title_text_black_12">O</span><span class="title_text_white_12">N</span><span class="title_text_black_12">L</span><span class="title_text_white_12">I</span><span class="title_text_black_12">N</span><span class="title_text_white_12">E</span><br class="main_title_change">

            <span class="title_text_black_12">R</span><span class="title_text_white_12">I</span><span class="title_text_black_12">V</span><span class="title_text_white_12">E</span><span class="title_text_black_12">R</span><span class="title_text_white_12">S</span><span class="title_text_black_12">I</span>

        </div>


    </div>
    <div class="titleButtom">

    </div>
    <div class="setUserName_warpp">
        <!-- <span class="title_now_player_text">online player 0</span><br/> -->
        <div class="title_join_name">
            <div class="title_name_space"></div>
            <span class="setNameText">Nick Name</span><br/>
            <input type="text" class="setUserName" placeholder="User Name">  
        </div>
        <div class="game_enter_button" onclick="mode_page()" id="modeselect">
            <span class="game_enter_button_text">Start</span>
        </div>
        <div>
            <i class="fa-brands fa-square-twitter icon-black"></i>
            <i class="fa-brands fa-square-facebook icon-white"></i>

            <i class="fa-brands fa-square-github icon-black"></i>
            <i class="fa-brands fa-discord icon-white"></i>
        </div>
    </div>

</div>



<div class="bottom_rogo">
<div>
    <span class="rogo_black">O</span>
    <span class="rogo_white">N</span>
    <span class="rogo_black">L</span>
    <span class="rogo_white">I</span>
    <span class="rogo_black">N</span>
    <span class="rogo_white">E</span>

</div>
<div>
    <span class="rogo_white">R</span>
    <span class="rogo_black">E</span>
    <span class="rogo_white">V</span>
    <span class="rogo_black">E</span>
    <span class="rogo_white">R</span>
    <span class="rogo_black">S</span>
    <span class="rogo_white">I</span>
</div>
</div>
    `
    return html
}