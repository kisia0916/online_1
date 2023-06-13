
//バグってる
const reverse_piece = (x,y)=>{
    let sub_map = stage.map
    try{
        if(stage.map[y+1][x] != turn.n  && stage.map[y+1][x] != 0 && stage.map[y+1][x] != 3){
            for(let i = y;stage_height>i;i++){
                if(stage.map[i][x] == 3 && i != y){
                    break
                }
                if(stage.map[i][x] == 0 && i != y){
                    break
                }
                if(stage.map[i][x] == turn.n){
                    for(let g = y;i>=g;g++){
                        if(g != y){
                            sub_map[g][x] = turn.n
                        }
                    }
                    break
                }
            }
        }
    }catch{

    }
    try{
        console.log("okop")
        if(stage.map[y-1][x] != turn.n && stage.map[y-1][x] != 0&& stage.map[y-1][x] != 3){
            for(let i = y;i>=0;i--){
                if(stage.map[i][x] == 3 && i != y){
                    break
                }
                if(stage.map[i][x] == 0 && i != y){
                    break
                }
                if(stage.map[i][x] == turn.n){
                    for(let g = y;i<=g;g--){
                        if(g != y){
                            sub_map[g][x] = turn.n
                        }

                    }
                    
                    break
                }
            }
        }
    }catch{

    }
    try{


        if(stage.map[y][x+1] != turn.n && stage.map[y][x+1] != 0 && stage.map[y][x+1] != 3){


            for(let i = x;stage_height>i;i++){
                console.log(i)
                if(stage.map[y][i] == 3 && i != x){
                    break
                }
                if(stage.map[y][i] == 0 && i != x){
                    break
                }
                if(stage.map[y][i] == turn.n){


                    for(let g = x;i>=g;g++){
                        if(g != x){
                            console.log("pppppppppppppp")
                            sub_map[y][g] = turn.n
                            console.log("kouno")
                        }

                    }
                break

                }

            }
        }
    }catch{

    }
    try{
        console.log("okop3")

        if(stage.map[y][x-1] != turn.n){
            for(let i = x;i>=0;i--){
                if(stage.map[y][i] == 3 && i != x){
                    break
                }
                if(stage.map[y][i] == 0 && i != x){
                    break
                }
                if(stage.map[y][i] == turn.n && stage.map[y][x-1] != 0 && stage.map[y][x-1] != 3){
                    for(let g = x;i<=g;g--){
                        if(g != x){
                            sub_map[y][g] = turn.n
                        }

                    }
                break
                    
                }

            }
        }
    }catch{

    }
    try{
        if(stage.map[y+1][x+1] != turn.n){
            let co = 0

            for(let i = x;stage_height>i;i++){
                if(stage.map[y+co][i] == 3 && i != x){
                    break
                }
                if(stage.map[y+co][i] == 0 && i != x){
                    break
                }
                if(stage.map[y+co][i] == turn.n && stage.map[y+1][x+1] != 0 && stage.map[y+1][x+1] != 3){
                    let co2 = 0
                    for(let g = x;i>=g;g++){
                        sub_map[y+co2][g] = turn.n
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
                if(stage.map[co][i] == 3 && i != x){
                    break
                }
                if(stage.map[co][i] == 0 && i != x){
                    break
                }
                if(stage.map[co][i] == turn.n&& stage.map[y-1][x-1] != 0 && stage.map[y-1][x-1] != 3){
                    let co2 = y
                    for(let g = x;i<=g;g--){
                        sub_map[co2][g] = turn.n
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
                if(stage.map[co][i] == 3 && i != x){
                    break
                }
                if(stage.map[co][i] == 0 && i != x){
                    break
                }
                if(stage.map[co][i] == turn.n&& stage.map[y-1][x+1] != 0 && stage.map[y-1][x+1] != 3){

                    let co2 = y
                    for(let g = x;i>g;g++){
                        sub_map[co2][g] = turn.n
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
                if(stage.map[co][i] == 3 && i != x){
                    break
                }
                if(stage.map[co][i] == 0 && i != x){
                    break
                }
                if(stage.map[co][i] == turn.n&& stage.map[y+1][x-1] != 0 && stage.map[y+1][x-1] != 3){

                    let co2 = y
                    for(let g = x;i<=g;g--){
                        sub_map[co2][g] = turn.n
                        co2+=1
                    }
                }
                co+=1
            }
        }
    }catch{
        
    }
    console.log(sub_map)
    sub_map[y][x] = turn.n
    stage.map = sub_map
    count_chips()
    send_stage()
    // turn_change()
}
const count_chips = ()=>{
    let bl = 0
    let wh = 0
    for (let i = 0;8>i;i++){
        for (let e = 0;8>e;e++){
            if(stage.map[i][e] == 1){
                bl+=1
            }else if(stage.map[i][e] == 2){
                wh +=1
            }
        }
    }
    let blco = document.querySelector(".block_num")
    let whco = document.querySelector(".block_num2")
    blco.textContent = bl
    whco.textContent = wh
    return [bl,wh]
}