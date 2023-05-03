const game_dom = ()=>{
    let html = `
    <div class="move_mist" id = "move_mist">
        
    </div>
    <div class="header">
    <div class="test">
        <div class="black_user">
            <div class="user_ls">
                <div class="black_user_black">

                </div>
                <span class="black_user_name">fumi0916</span>
            </div>
        </div>
        <div class="white_user">
            <div class="user_ls">
                <div class="whtie_user_white">

                </div>

                <span class ="white_user_name">kisia aaa</span>

            </div>
        </div>
    </div>
    <div style="display:flex">
        <div class="black">
            <div class="black_block"></div>
            <span class="block_num">20</span>
        </div>
        <div class="white">
            <div class="white_block"></div>
            <span class="block_num2">12</span>
        </div>
    </div>
</div>
<div class="main_warpp9">
    <div class="turn_timer">
        <span class="turn_timer_text">2:00</span>
    </div>
    <canvas width="600" height="600" class="canvas"></canvas>

</div>
</div>



    `
    return html
}