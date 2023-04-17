
import { stage, stage_height, turn } from "./main"

export const reverse_piece = (x:number,y:number)=>{
    try{
        if(stage.map[y+1][x] != turn.n){
            for(let i = y;stage_height>i;i++){
                if(stage.map[i][x] == turn.n){
                    for(let g = y;i>=g;g++){
                        stage.map[g][x] = turn.n
                    }
                    // break
                }
            }
        }
    }catch{

    }
    try{
        if(stage.map[y-1][x] != turn.n){
            for(let i = y;i>=0;i--){
                if(stage.map[i][x] == turn.n){
                    for(let g = y;i<=g;g--){
                        stage.map[g][x] = turn.n
                    }
                    
                    // break
                }
            }
        }
    }catch{

    }
    try{
        if(stage.map[y][x+1] != turn.n){
            for(let i = x;stage_height>i;i++){
                if(stage.map[y][i] == turn.n){
                    for(let g = x;i>=g;g++){
                        stage.map[y][g] = turn.n
                    }
                }
            }
        }
    }catch{

    }
    try{
        if(stage.map[y][x-1] != turn.n){
            for(let i = x;i>=0;i--){
                if(stage.map[y][i] == turn.n){
                    for(let g = x;i<=g;g--){
                        stage.map[y][g] = turn.n
                    }
                    
                }
            }
        }
    }catch{

    }
    try{
        if(stage.map[y+1][x+1] != turn.n){
            let co = 0
            for(let i = x;stage_height>i;i++){
                if(stage.map[y+co][i] == turn.n){
                    let co2 = 0
                    for(let g = x;i>=g;g++){
                        stage.map[y+co2][g] = turn.n
                        co2+=1
                    }
                }
                co+=1
            }
        }
    }catch{

    }
    try{
        if(stage.map[y-1][x-1] != turn.n){
            let co = y
            for(let i = x;i>=0;i--){
                if(stage.map[co][i] == turn.n){
                    let co2 = y
                    for(let g = x;i<=g;g--){
                        stage.map[co2][g] = turn.n
                        co2-=1
                    }
                }
                co-=1
            }
        }
    }catch{
        
    }

    try{
        if(stage.map[y-1][x+1] != turn.n){

            let co = y
            for(let i = x;stage_height>i;i++){
                if(stage.map[co][i] == turn.n){

                    let co2 = y
                    for(let g = x;i>g;g++){
                        stage.map[co2][g] = turn.n
                        co2-=1
                    }
                }
                co-=1
            }
        }
    }catch{
        
    }
    try{
        if(stage.map[y+1][x-1] != turn.n){

            let co = y
            for(let i = x;i>=0;i--){
                if(stage.map[co][i] == turn.n){

                    let co2 = y
                    for(let g = x;i<=g;g--){
                        stage.map[co2][g] = turn.n
                        co2+=1
                    }
                }
                co+=1
            }
        }
    }catch{
        
    }
}