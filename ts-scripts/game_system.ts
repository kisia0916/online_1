
import { reverse_piece } from "./funs";
import { mx, my, stage, stage_height, stage_width, turn } from "./main";

export const turn_change = ():void=>{
    if(turn.n == 1){
        turn.n = 2
    }else{
        turn.n = 1
    }
}

export const checkPutSpace = ()=>{
    ///複数個の判定ができないバグがある
    for(let i = 0;stage_height>i;i++){
        for(let s = 0;stage_width>s;s++){
            try{
            if(stage.map[i][s] != 0 && turn.n != stage.map[i][s] && stage.map[i][s] != 3 && (stage.map[i+1][s] == 0 || stage.map[i-1][s] == 0 || stage.map[i+1][s+1] == 0 || stage.map[i+1][s-1] == 0 || stage.map[i][s+1] == 0 || stage.map[i][s-1] == 0  || stage.map[i-1][s-1] == 0 || stage.map[i-1][s+1] == 0)){

                    if(stage.map[i][s+1] != 0 && stage.map[i][s-1] == 0){
                        for(let g = s;stage_width>g;g++){
                            if(stage.map[i][g] == turn.n){
                                stage.map[i][s-1] = 3
                                console.log(stage.map)
                                break
                            }
                        }
                    }
                    console.log("f")


                    if(stage.map[i][s-1] != 0&& stage.map[i][s+1] == 0){
                        for(let g = s;0<=g;g--){
                            if(stage.map[i][g] == turn.n){
                                stage.map[i][s+1] = 3
                                console.log(stage.map)
                                break
                            }
                        }
                    }

                    if(stage.map[i-1][s] != 0&& stage.map[i+1][s] == 0){
                        for(let g = i;0<=g;g--){
                            if(stage.map[g][s] == turn.n){
                                stage.map[i+1][s] = 3
                                console.log(stage.map)
                                break
                            }
                        }
                    }
      

                    if(stage.map[i+1][s] != 0&& stage.map[i-1][s] == 0){
                        for(let g = i;stage_height>g;g++){
                            if(stage.map[g][s] == turn.n){
                                stage.map[i-1][s] = 3
                                console.log(stage.map)
                                break
                            }
                        }
                    }

                //斜め

                    if(stage.map[i+1][s+1] != 0 && stage.map[i-1][s-1] == 0){
                        console.log("ff")
                        let s2 = s
                        for(let g = i;stage_height>g;g++){
                            if(stage_width>s2){
                                if(stage.map[g][s2] == turn.n){
                                    console.log("ff")
                                    stage.map[i-1][s-1] = 3
                                    console.log(stage.map)
                                    break
                                }
                                s2 +=1
                            }
                        }
                    }


                    if(stage.map[i-1][s-1] != 0 && stage.map[i+1][s+1] == 0){
                        console.log("ff")
                        let s2 = s
                        for(let g = i;g>=0;g--){
                            if(s2>=0){
                                if(stage.map[g][s2] == turn.n){
                                    console.log("ff")
                                    stage.map[i+1][s+1] = 3
                                    console.log(stage.map)
                                    break
                                }
                                s2 -=1
                            }
                        }
                    }


                    if(stage.map[i+1][s-1] != 0 && stage.map[i-1][s+1] == 0){
                    console.log("gg")
                        
                        let s2 = s
                        for(let g = i;stage_height>g;g++){
                            if(s2>=0){
                                if(stage.map[g][s2] == turn.n){

                                    console.log("ff2")
                                    stage.map[i-1][s+1] = 3
                                    console.log(stage.map)
                                    break
                                }
                                s2 -=1
                            }
                        }
                    }


                    if(stage.map[i-1][s+1] != 0 && stage.map[i+1][s-1] == 0){
                        console.log("gg")
                            
                            let s2 = s
                            for(let g = i;g>=0;g--){
                                if(s2<stage_height){
                                    if(stage.map[g][s2] == turn.n){
        
                                        console.log("ff2")
                                        stage.map[i+1][s-1] = 3
                                        console.log(stage.map)
                                        break
                                    }
                                    s2 +=1
                                }
                            }
                        }


            }
        }catch{

        }
        }
}

}
export const check_reverse = (x:number,y:number)=>{
    reverse_piece(x,y)
}

export const setPiece = ()=>{
    if(stage.map[my.p][mx.p] == 3){
        check_reverse(mx.p,my.p)
        turn_change()
        for(let i = 0;stage_height>i;i++){
            for(let s = 0;stage_width>s;s++){
                if(stage.map[i][s] == 3){
                    stage.map[i][s] = 0
                }
            }
        }
        checkPutSpace()
    }
}