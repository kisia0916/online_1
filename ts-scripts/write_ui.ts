import { ctx, stage, stage_height, stage_space, stage_width } from "./main"


export const write_stage = ()=>{

    ctx.beginPath()
    for(let i = 0;stage_width-1>i;i++){
            write_line((i+1)*stage_space,0,(i+1)*stage_space,600,"white")
    }
    for(let s = 0;stage_height-1>s;s++){
        write_line(0,(s+1)*stage_space,600,(s+1)*stage_space,"white")
    }
    ctx.stroke()
}
export const writePiece = ():void=>{
    for(let i = 0;stage_height>i;i++){
        for(let s = 0;stage_width>s;s++){
            if(stage.map[s][i] == 2){
                ctx.beginPath () ;
                ctx.arc( i*stage_space+37.5, s*stage_space+37.5, 36, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
                ctx.fillStyle = "white" ;
                // 塗りつぶしを実行
                ctx.fill() ;
            }
            if(stage.map[s][i] == 1){
                ctx.beginPath () ;
                ctx.arc( i*stage_space+37.5, s*stage_space+37.5, 36, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
                ctx.fillStyle = "black" ;
                // 塗りつぶしを実行
                ctx.fill() ;

            }
            if(stage.map[s][i] == 3){
                ctx.beginPath () ;
                ctx.arc( i*stage_space+37.5, s*stage_space+37.5, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
                ctx.fillStyle = "rgba(37, 254, 145, 0.54)" ;
                // 塗りつぶしを実行
                ctx.fill() ;
            }
        }
    }
}
function write_line(x:number,y:number,x2:number,y2:number,color:string):void{
    ctx.strokeStyle = color
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
}