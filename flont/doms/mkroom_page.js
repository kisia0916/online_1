const mkroom_dom = ()=>{
    let html = `
        <h1>room作成</h1>
        <span class="room_span" id = "room_span">roomId:</span>
        <input type="text" id = "room_ID">

        <button id = "copy_button" onclick="copy1()">コピー</button>
    `
    return html
}