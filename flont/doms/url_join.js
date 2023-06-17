const url_join_dom = (id,room_name)=>{
    let html = `
    <div class="move_mist" id = "move_mist">
        
    </div>
    <div class="mkroom_top">

    <div class="join_room_title">
        <span class="join_room_title_text">null</span>
    </div>
</div>
<div class="mkroom_main">
    <div class="mkroom_center5">
        <div class="Host_name12">
            <div class="Host_name_title_warpp">
                <span class="join_room_text">You are invited</span>

                
            </div>
            <div class="url_join_warpp">
                <div class="urlJoinNameTop">
                    <span class="urlJoinNameText">Nick Name</span>
                </div>
                <div class="urlJoinMain">
                    <input type="text" class="urlJoinInput" placeholder="User Name">
                </div>
            </div>
            <!-- <input type="text" class="host_name_input"> -->
            <div class="url_join_button" onclick = "url_join(this.id)" id ="${id}">
                <span class="url_join_text">Join</span>
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
</div>
    `
    return html
}