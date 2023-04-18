const game_dom = ()=>{
    let html = `
        <span>roomId:${roomId}</span><br/>
        <span>p1:${p1}</span><br/>
        <span>p2:${p2}</span><br/>
        <span>black:${black}</span><br/>
        <span>white:${white}</span><br/>
        <span>yourColor:${my_color}</span>
        <canvas width="600" height="600" class="canvas"></canvas>




    `
    return html
}