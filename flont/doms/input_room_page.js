const inputRoom_dom = ()=>{
    let html = `
    <div class="move_mist" id = "move_mist">
        
    </div>
    <div class="mkroom_top">
    <div class="back_home">
        <span class="material-symbols-outlined join_room_back">
            arrow_back_ios
            </span>
    </div>
    <div class="join_room_title">
        <span class="join_room_title_text">Join Room</span>
    </div>
</div>
<div class="mkroom_main">
    <div class="mkroom_center2">
        <div class="Host_name2">
            <div class="Host_name_title_warpp">
                <span class="join_room_text">Room ID</span>
            </div>
            <input type="text" class="host_name_input">
        </div>

        

        <div class="start_button">
            <span class="join_text">Join</span>
        </div>
    </div>
</div>
<div class="mkroom_bottom">
    <span class="rogo_text">
        <!-- ©onlinereversi -->
    </span>
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