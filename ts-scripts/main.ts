import { checkPutSpace,setPiece } from "./game_system"
import { set_stage } from "./init"
import { writePiece, write_stage } from "./write_ui"

    export let canvas = document.querySelector<HTMLCanvasElement>(".canvas")!
    export let ctx = canvas.getContext("2d")!

    export const stage_width:number = 8
    export const stage_height:number = 8

    export let stage_space:number = 600/8

    type stage_type = {
        map:number[][]
    }
    export let stage:stage_type = {
        map:[]
    }
    export let turn = {n:1}
    export let mxStage = {p:0}
    export let myStage = {p:0}
    export let mx = {p:0}
    export let my = {p:0}

    window.addEventListener( "DOMContentLoaded" , ()=> {
        canvas.addEventListener("mousemove",(e)=>{
            const rect = canvas.getBoundingClientRect();
            // console.log(e)
            mxStage.p= (e.pageX -rect.left)* (canvas.width / rect.width);
            myStage.p= (e.pageY -rect.top)* (canvas.height / rect.height);
            mx.p = Math.floor(mxStage.p/75)
            my.p = Math.floor(myStage.p/75)

            // console.log(mx.p,my.p)
        })
    })

    window.addEventListener("click",()=>{
        setPiece()
    })

    set_stage()
    console.log(stage.map)

    checkPutSpace()


    console.log("test")
    const main_loop = ():void=>{
        ctx.clearRect(0,0,600,600)
        write_stage()
        writePiece()
        window.requestAnimationFrame(main_loop);
    }
    main_loop()