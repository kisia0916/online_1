

const turn_change = ()=>{
    console.log(turn.n)
    if(turn.n == 1){
        turn.n = 2
        // count_chips()
    }else{
        turn.n = 1
        // count_chips()
    }
}

const turn_change_socket = (next_turn)=>{
    
}
const checkPutSpace = ()=>{
    ///複数個の判定ができないバグがある
        ///複数個の判定ができないバグがある
        let co = 0
        for(let i = 0;stage_height>i;i++){
            for(let s = 0;stage_width>s;s++){
                try{
                if(stage.map[i][s] != 0 && turn.n != stage.map[i][s] && stage.map[i][s] != 3 && (stage.map[i+1][s] == 0 || stage.map[i-1][s] == 0 || stage.map[i+1][s+1] == 0 || stage.map[i+1][s-1] == 0 || stage.map[i][s+1] == 0 || stage.map[i][s-1] == 0  || stage.map[i-1][s-1] == 0 || stage.map[i-1][s+1] == 0)){
    
                        if(stage.map[i][s+1] != 0 && stage.map[i][s-1] == 0){
                            console.log("1")
                            for(let g = s;stage_width>g;g++){
                                if (stage.map[i][g] == 0|| stage.map[i][g] == 3){
                                    break
                                }
                                if(stage.map[i][g] == turn.n){
                                    stage.map[i][s-1] = 3
                                    console.log(stage.map)
                                    co=1
                                    break
                                }
                            }
                        }
                        console.log("f")
    
    
                        if(stage.map[i][s-1] != 0&& stage.map[i][s+1] == 0){
                            console.log(i,s)
                            console.log("jklr;jg0439jg43jg-09rjg09r3gj045gjfkla;jgor;igj3o")

                            for(let g = s;0<=g;g--){
                                if (stage.map[i][g] == 0|| stage.map[i][g] == 3){
                                    break
                                }
                                if(stage.map[i][g] == turn.n){
                                    stage.map[i][s+1] = 3
                                    console.log(stage.map)
                                    co=1

                                    break
                                }
                            }
                        }
    
                        if(stage.map[i-1][s] != 0&& stage.map[i+1][s] == 0){
                            console.log("1")

                            for(let g = i;0<=g;g--){
                                if (stage.map[g][s] == 0|| stage.map[g][s] == 3){
                                    break
                                }
                                if(stage.map[g][s] == turn.n){
                                    stage.map[i+1][s] = 3
                                    console.log(stage.map)
                                    co=1

                                    break
                                }
                            }
                        }
          
    
                        if(stage.map[i+1][s] != 0&& stage.map[i-1][s] == 0){
                            console.log("1")

                            for(let g = i;stage_height>g;g++){
                                if (stage.map[g][s] == 0|| stage.map[g][s] == 3){
                                    break
                                }
                                if(stage.map[g][s] == turn.n){
                                    stage.map[i-1][s] = 3
                                    console.log(stage.map)
                                    co=1

                                    break
                                }
                            }
                        }
    
                    //斜め
    
                        if(stage.map[i+1][s+1] != 0 && stage.map[i-1][s-1] == 0){
                            console.log("1")

                            console.log("ff")
                            let s2 = s
                            for(let g = i;stage_height>g;g++){
                                if (stage.map[g][s2] == 0|| stage.map[g][s2] == 3){
                                    break
                                }
                                if(stage_width>s2){
                                    if(stage.map[g][s2] == turn.n){
                                        console.log("ff")
                                        stage.map[i-1][s-1] = 3
                                        console.log(stage.map)
                                        co=1

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
                                if (stage.map[g][s2] == 0|| stage.map[g][s2] == 3){
    
                                    console.log("sine")
                                    break
                                }
                                if(s2>=0){
                                    if(stage.map[g][s2] == turn.n){
                                        console.log("ff")
                                        stage.map[i+1][s+1] = 3
                                        console.log(stage.map)
                                        co=1

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
                                if (stage.map[g][s2] == 0|| stage.map[g][s2] == 3 ){
    
    
                                    break
                                }
                                if(s2>=0){
                                    if(stage.map[g][s2] == turn.n){
    
                                        console.log("ff2")
                                        stage.map[i-1][s+1] = 3
                                        console.log(stage.map)
                                        co=1

                                        break
                                    }
                                    s2 -=1
                                }
                            }
                        }
    
    
                        if(stage.map[i-1][s+1] != 0 && stage.map[i+1][s-1] == 0){
                            console.log(stage)
                                
                                let s2 = s
                                for(let g = i;g>=0;g--){
                                    if (stage.map[g][s2] == 0|| stage.map[g][s2] == 3){
                                        console.log("gg")
    
    
                                        break
                                    }
                                    if(s2<stage_height){
                                        if(stage.map[g][s2] == turn.n){
            
                                            console.log("ff2")
                                            stage.map[i+1][s-1] = 3
                                            console.log(stage.map)
                                            co=1

                                            break
                                        }
                                        s2 +=1
                                    }
                                }
                            }
    
    
                }
            }catch{
                console.log("0000000000000000000000000000000000000")
                if(i == stage_height-1 || i == 0){
                    console.log("11122222222222222222222222222222222222222222222222")
                    if(s != 0 && s != stage_width-1){
                        try{
                        if(stage.map[i][s+1] != 0 && stage.map[i][s-1] == 0){
                            for(let g = s;stage_width>g;g++){
                                if (stage.map[i][g] == 0|| stage.map[i][g] == 3){
                                    break
                                }
                                if(stage.map[i][g] == turn.n){
                                    stage.map[i][s-1] = 3
                                    console.log(stage.map)
                                    co=1

                                    break
                                }
                            }
                        }


                        if(stage.map[i][s-1] != 0&& stage.map[i][s+1] == 0){
                            console.log("kikisisisisisisis")

                            for(let g = s;0<=g;g--){
                                if (stage.map[i][g] == 0|| stage.map[i][g] == 3){
                                    break
                                }
                                if(stage.map[i][g] == turn.n){
                                    stage.map[i][s+1] = 3
                                    console.log(stage.map)
                                    co=1

                                    break
                                }
                            }
                        }

                        if(stage.map[i-1][s] != 0){
                            console.log("kikisisisisisisis")
                            for(let g = i;0<=g;g--){
                                if (stage.map[g][s] == 0|| stage.map[g][s] == 3){
                                    break
                                }
                                if(stage.map[g][s] == turn.n){
                                    stage.map[i+1][s] = 3
                                    console.log(stage.map)
                                    co=1

                                    break
                                }
                            }
                        }

                        if(stage.map[i-1][s-1] != 0 && stage.map[i+1][s+1] == 0){
                            console.log("ff")
                            let s2 = s
                            for(let g = i;g>=0;g--){
                                if (stage.map[g][s2] == 0|| stage.map[g][s2] == 3){
    
                                    console.log("sine")
                                    break
                                }
                                if(s2>=0){
                                    if(stage.map[g][s2] == turn.n){
                                        console.log("ff")
                                        stage.map[i+1][s+1] = 3
                                        console.log(stage.map)
                                        co=1

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
                                    if (stage.map[g][s2] == 0|| stage.map[g][s2] == 3 ){
        
        
                                        break
                                    }
                                    if(s2>=0){
                                        if(stage.map[g][s2] == turn.n){
        
                                            console.log("ff2")
                                            stage.map[i-1][s+1] = 3
                                            console.log(stage.map)
                                            co=1

                                            break
                                        }
                                        s2 -=1
                                    }
                                }
                            }
                        }catch{
                            
                        }
                    }
                }
            }
            }
    }
    
    return co
}
const check_reverse = (x,y)=>{
    reverse_piece(x,y)
}

const setPiece = ()=>{
    if(location.pathname.split("/")[1] == "game"){
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
            // checkPutSpace()
        }
    }
}
const setPiece_pass = ()=>{
        turn_change()
        send_stage()
        for(let i = 0;stage_height>i;i++){
            for(let s = 0;stage_width>s;s++){
                if(stage.map[i][s] == 3){
                    stage.map[i][s] = 0
                }
            }
        }
        // checkPutSpace()
}
const reset_stage_next_turn = ()=>{
    for(let i = 0;stage_height>i;i++){
        for(let s = 0;stage_width>s;s++){
            if(stage.map[i][s] == 3){
                stage.map[i][s] = 0
            }
        }
    }
    
}
const check_win = ()=>{
    let black = 0
    let white = 0
    let end_flg = false
    for(let i = 0;stage_height>i;i++){
        for(let s = 0;stage_width>s;s++){
            if(stage.map[i][s] == 1){
                black +=1
            }else if(stage.map[i][s] == 2){
                white+=1
            }
        }
    }
    if(black + white == 64){
        end_flg = true
    }
    return [black,white,end_flg]
}
