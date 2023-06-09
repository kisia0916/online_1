const mkroom_dom = ()=>{
    let html = `
    <div class="move_mist" id = "move_mist">
        
    </div>
    <div class="mkroom_top">
    <div class = "back_button_1" onclick = "move_back(this.id,0.5)" id = "modeselect">
    <span class="material-symbols-outlined back_button_rogo">
    arrow_back
    </span>
</div>
    <div class="mkroom_title">
        <span class="mkroom_title_text">Make Room</span>
    </div>
</div>
<div class="mkroom_main">
    <div class="mkroom_center3">
        <div class="Host_name4">
            <div class="Host_name_title_warpp">
                <span class="host_name_text">Host Name</span>
            </div>
            <input type="text" class="host_name_input">
        </div>

        <div class="Turn_time">
            <div class="Host_name_title_warpp">
                <span class="host_name_text">Turn Time</span>
            </div>
            <div class="time_select_warpp">
                <select class="time_select">
                    <option>0</option>

                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>

                </select>
                <span>:</span>
                <select class="time_select2">
                    <option>00</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>


                </select>
            </div>
        </div>
        <div class="Host_color">
            <div class="Host_name_title_warpp">
                <span class="host_name_text">Host Color</span>
            </div>
            <div class="color_select_warpp">
                <span class="color_select_color">Your Color :</span>
                
            <select class="color_select3">
                <option>random</option> 
                <option>black</option>
                <option>white</option>

            </select>
            </div>
        </div>
        <div class="start_button" onclick="mk_room()">
            <span class="start_text">Start</span>
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