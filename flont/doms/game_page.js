const game_dom = (black, white) => {
  let html = `
    <div class="move_mist move_mist2" id = "move_mist" style="z-index:1100">
        
    </div>
    <div class="first_name_warpp"> 
    <div class="first_screen_main">
        <div class="first_black_space">
            <div class="first_black_chip"></div>
            <span class = "first_name_text13">${black}</span>
        </div>
        <div class="first_text_space">
            <span class="first_text_space_text">VS</span>
        </div>
        <div class="first_white_space">
            <div class="first_white_chip"></div>
            <span class = "first_name_text13">${white}</span>
            
        </div>
        <div class = "first_button_warpp">
            <div class="first_join_button" onclick="send_completion_preparation()">
                <span class="first_join_button_text">OK</span>
            </div>
        </div>
    </div>

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
            <span class="block_num">0</span>
        </div>
        <div class="white">
            <div class="white_block"></div>
            <span class="block_num2">0</span>
        </div>
    </div>
</div>
<div class="main_warpp9">
    <div class="turn_timer">
        <span class="turn_timer_text">0:00</span>
    </div>
    <canvas width="600" height="600" class="canvas"></canvas>

</div>
</div>



    `;
  return html;
};
const game_dom_con_text = (other_name) => {
  let html = `
    <div class="first_con_joinText">
    <span class="first_con_join">waiting ${other_name}....</span>
</div>
    `;
  return html;
};
const game_dom_win_text = (black, white) => {
  let html = `
    <div class="first_screen_main2">
    <div class="resolt_data">
        <span class="resolt_data_text win">You Win</span>
    </div>
    <div class="first_box_warpp">
        <div class="first_box">
            <div class="first_box_center">
                <div class="first_re_black_space">
                    <div class="resolt_black_chip"></div>
                    <span class="resolt_black_num">${black}</span>
                </div>
                <div class="first_re_white_space">
                    <div class="resolt_white_chip"></div>
                    <span class="resolt_white_num">${white}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="game_back_button" onclick="back_mode()">
        <span class="game_back_button_text" >Home</span>
    </div>
</div>
    `;
  return html;
};
const game_dom_lose_text = (black, white) => {
  let html = `
    <div class="first_screen_main2">
    <div class="resolt_data">
        <span class="resolt_data_text lose">You lose</span>
    </div>
    <div class="first_box_warpp">
        <div class="first_box">
            <div class="first_box_center">
                <div class="first_re_black_space">
                    <div class="resolt_black_chip"></div>
                    <span class="resolt_black_num">${black}</span>
                </div>
                <div class="first_re_white_space">
                    <div class="resolt_white_chip"></div>
                    <span class="resolt_white_num">${white}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="game_back_button" onclick="back_mode()">
        <span class="game_back_button_text" >Home</span>
    </div>
</div>
    `;
  return html;
};
