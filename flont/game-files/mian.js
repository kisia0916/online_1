let canvas;
let ctx;
let stage = {
    map:[]
};
let stage_space;
let stage_height;
let stage_width;
let mxStage;
let myStage;
let my;
let mx;
let my_turn;
let now_turn;
let turn = {n:1}
let my_color;
let pass_counter;
let black_name = ""
let white_name = ""
let turn_time = 0
let game_end_Co = 0
// let bl = 0
// let wh = 0
const game_start  = ()=>{
    game_end_Co = 0
    canvas = document.querySelector(".canvas")
    ctx = canvas.getContext("2d")
    
    let black_name_dom = document.querySelector(".black_user_name")
    let white_name_dom = document.querySelector(".white_user_name")
    let blco = document.querySelector(".block_num")
    let whco = document.querySelector(".block_num2")
    blco.textContent = 2
    whco.textContent = 2
    black_name_dom.textContent = black_name
    white_name_dom.textContent = white_name
    stage_width = 8
    stage_height = 8
    // bl = 0
    // wh = 0

    stage_space = 600/8


    // stage.map = [
    //     [0,0,0,1,2,2,0,0],
    //     [0,0,0,0,0,0,2,0],
    //     [0,1,0,0,0,0,2,0],
    //     [0,0,0,0,0,0,1,0],
    //     [0,0,0,2,0,0,0,0],
    //     [0,0,0,0,2,0,2,0],
    //     [0,0,0,0,0,0,2,0],
    //     [0,0,0,0,0,0,0,0],

    // ]

    
    mxStage = {p:0}
    myStage = {p:0}
    mx = {p:0}
    my = {p:0}
    

        canvas.addEventListener("mousemove",(e)=>{
            const rect = canvas.getBoundingClientRect();

            mxStage.p= (e.pageX -rect.left)* (canvas.width / rect.width);
            myStage.p= (e.pageY -rect.top)* (canvas.height / rect.height);
            mx.p = Math.floor(mxStage.p/75)
            my.p = Math.floor(myStage.p/75)
    
            // console.log(mx.p,my.p)
        })

    window.addEventListener("click",()=>{
        console.log("tres")
        setPiece()
    })

    // set_stage()
    if(my_color == "black"){
        checkPutSpace()
    }


    console.log("test")

}
function sleep(waitMsec) {
    let startMsec = new Date();
   
    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
  }
const win_write_12 = (black,white)=>{
    sleep(1.5)
    let warpp = document.querySelector(".first_name_warpp")
    warpp.style.visibility = "visible"
    warpp.classList.remove("first_fade_out")
    warpp.innerHTML = game_dom_win_text(black,white)
    warpp.classList.add("win_ani")
    warpp.style.removeProperty("visibility")
}
const lose_write_12 = (black,white)=>{
    sleep(1.5)

    let warpp = document.querySelector(".first_name_warpp")
    warpp.style.visibility = "visible"
    warpp.classList.remove("first_fade_out")
    warpp.innerHTML = game_dom_lose_text(black,white)
    warpp.classList.add("win_ani")
    warpp.style.removeProperty("visibility")
}

const main_loop = ()=>{
    // console.log("kk")
    ctx.clearRect(0,0,600,600)
    write_stage()

    writePiece()
    if(game_end_Co == 0){
        window.requestAnimationFrame(main_loop);
    }
    // let chipData = count_chips()
    // if(chipData[0]+chipData[1] == 5 && game_end_Co == 0){
    //     ctx.clearRect(0,0,600,600)
    //     write_stage()
    
    //     writePiece()
    //     game_end_Co = 1
    //     win_write_12()
    //     Socket.emit("end_game",{room:roomId})

    //     // alert("end")
    // }
}

const init_game = ()=>{
    stage = {
        map:[]
    };
    stage_space;
    my_turn;
    now_turn;
    turn = {n:1}
    my_color;
    pass_counter;
    black_name = ""
    white_name = ""
    turn_time = 0
    game_end_Co = 0
}