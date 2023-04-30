const game_dom = ()=>{
    let html = `
    <div class="header">
    <div class="test">

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