const modeselect_dom = ()=>{
    let html = `
    <div class="move_mist" id = "move_mist">
        
    </div>
    <div class="sltop">

    <div class="join_room_title">
        <span class="join_room_title_text">Mode Select</span>
    </div>
</div>
<div class="slmain">
    <div class="slcenter">
        <div class="slmodeSelect">

            <!-- <input type="text" class="host_name_input"> -->
            <div class="sl_states">
                <div class="modebuttonTop">
                    <div class="buttonWarpp">

                                <div class="slButton1Warpp">
                                    <div class="slButton1" onclick="start_matching()">
                                        <span class="material-symbols-outlined mode1Icon">
                                            language
                                            </span>
                                    </div>
                                    <span class="bl">Play Online</span>
                                </div>


                                <div class="slButton2Warpp">
                                    <div class="slButton2" onclick="offline_page()">
                                        <span class="material-symbols-outlined mode2Icon">
                                            person
                                        </span>
                                    </div>
                                    <span class="wh">Play Offline</span>

                                </div>
                            </div>

                    </div>
                </div>
                <div class="modebuttonBottom">
                    <div class="buttonWarpp">
                        <div class="slButton3Warpp">
                            <div class="slButton3" onclick="mk_room_setting()">
                                <span class="material-symbols-outlined mode2Icon">
                                    group_add
                                    </span>
                                </div>
                                <span class="wh">Make Room</span>

                        </div>
                        <div class="slButton4Warpp">
                             <div class="slButton4" onclick="join_page()">
                                <span class="material-symbols-outlined mode1Icon">
                                    last_page
                                    </span>
                                </div>
                                <span class="bl">Join Room</span>

                        </div>
                    </div>
                </div>
            </div>
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
    `
    return html
}