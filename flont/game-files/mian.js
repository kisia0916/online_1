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
let turn = {n:0}

const game_start  = ()=>{
    canvas = document.querySelector(".canvas")
    ctx = canvas.getContext("2d")

    stage_width = 8
    stage_height = 8

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

    checkPutSpace()


    console.log("test")

}


const main_loop = ()=>{
    // console.log("kk")
    ctx.clearRect(0,0,600,600)
    write_stage()

    writePiece()
    window.requestAnimationFrame(main_loop);
}
