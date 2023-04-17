import { stage, stage_height, stage_width } from "./main"

export const set_stage = ()=>{
    for(let i =  0;stage_height>i;i++){
        if(i+1 == (stage_height)/2){
            stage.map[i] = [0,0,0,2,1,0,0,0]
        }else if(i+1 == (stage_height)/2+1){
            stage.map[i] = [0,0,0,1,2,0,0,0]
        }else{
            stage.map[i] = [0,0,0,0,0,0,0,0]

        }
    }
    console.log(stage)
}