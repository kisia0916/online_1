const offline_dom = ()=>{
    let html = `
    <div class="move_mist" id = "move_mist">
        
    </div>
    <div class="mkroom_top">
    <div class = "back_button_1" onclick = "move_back(this.id,0.5)" id = "modeselect">
    <span class="material-symbols-outlined back_button_rogo">
    arrow_back
    </span>
</div>
    <div class="join_room_title">
        <span class="join_room_title_text">Play Offline</span>
    </div>
</div>
<div class="mkroom_main">
    <div class="mkroom_center">
        <div class="mode_select">
            <div class="Host_name_title_warpp">
                <span class="join_room_text2">Mode</span>
            </div>
            <!-- <input type="text" class="host_name_input"> -->
            <div class="room_states">
                <div class="vsCPU_button">
                    <div class="mode_select_button_text">
                        <span class="material-symbols-outlined select_rogo">
                            smart_toy
                            </span>
                        </div>
                        <span class="mode_text">VS CPU</span>

                </div>
                <div class="vshuman_button">
                    <div class="mode_select_button_text">
                        <span class="material-symbols-outlined select_rogo">
                            group
                            </span>
                        </div>
                        <span class="mode_text">1 VS 1</span>

                </div>
            </div>
        </div>



<div class="mkroom_bottom">
    <span class="rogo_text">
        <!-- ©onlinereversi -->
    </span>
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