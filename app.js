const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const io = require("socket.io")(server)
const body_pase = require("body-parser")
const path = require("path")
const fs = require("fs")
const pages = require("./router/page_routers")
const ejs = require("ejs")
const uuid = require('node-uuid');
const { resolveModuleName } = require("typescript")


const index_page = fs.readFileSync("./views/index.ejs","utf-8")


app.use(express.json())

app.use(body_pase.json());//////////////////////////////   ここ重要
app.use(body_pase.urlencoded({ extended: true }));//////
app.use(express.static(path.join(__dirname, "js")));
app.use("/flont", express.static("flont"))

app.get("/",(req,res)=>{
    let html = ejs.render(index_page,{

    })
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(html)
    res.end()
})


app.use("/",pages)



let wait_match = []
let games = []
let players = []
let wait_rooms = []
let user_info = []
let game_prepar_list = []
io.on("connection",(socket)=>{
    console.log("ff")
    let userId = uuid.v4()
    let p2pId = ""
    let user_name = ""
    let set_data_flg = false
    let joinRoomList = [{room:""},{user:""}]//このユーザーが入っているsocketのrooomの情報
    socket.join(userId)
    players.push(userId)


    socket.on("move_modepage",(data)=>{
        io.to(userId).emit("set_data",{userId:userId})
    })
    socket.on("send_set_data",(data)=>{
        console.log("kopjgiofpajorfn")
        io.to(userId).emit("set_data",{userId:userId})
    })
    joinRoomList[1].user = userId
    socket.on("set_info",(data)=>{
        if(!set_data_flg){
            user_info.push({userId:data.userId,p2pId:data.p2pId,name:data.name})
            set_data_flg = true
        }
        console.log(user_info)
        p2pId = data.p2pId
        user_name = data.name
    })
    socket.on("join_matching",(data)=>{
        if(wait_match.indexOf(userId) == -1){
            // console.log(userId)
            wait_match.push(userId)

            if(wait_match.length >=2){
                let p1 = ""
                let p2 = ""
                let p2p1 = ""
                let p2p2 = ""
                let p1name = ""
                let p2name = ""
                p1 = wait_match[0]
                p2 = wait_match[1]

                let co = 0
                for (let i = 0;user_info.length>i;i++){
                    if(user_info[i].userId == p1){
                        co+=1
                        p2p1 = user_info[i].p2pId
                        p1name = user_info[i].name

                    }
                    if(user_info[i].userId == p2){
                        co+=1
                        p2p2 = user_info[i].p2pId
                        p2name = user_info[i].name

                    }
                    if(co >= 2){
                        break
                    }
                }
                console.log(wait_match)
                console.log(wait_match[0])
                console.log(wait_match[1])
                console.log(p2p1,p2p2)

                wait_match.splice(0,2)
                let co1 = ""
                let co2 = ""
                let roomId = uuid.v4()
                socket.join(roomId)

                joinRoomList[0].room =roomId
                //ターン決め
                co1 = Math.floor(Math.random()*2)
                let black = ""
                let white = ""
                let my_color = ""
                let push_data = {
                    roomId:roomId,
                    stage:[

                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,2,1,0,0,0],
                        [0,0,0,1,2,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],

                    ],
                    p1:p1,
                    p2:p2,
                    p1name:p1name,
                    p2name:p2name,
                    p2p1:p2p1,
                    p2p2:p2p2,
                    now_turn:1,
                    black:black,
                    white:white,
                    black_name:"",
                    white_name:"",
                    pass_counter:0,
                    turn_timer:120
                }
                if(co1 == 0){
                    black = p1
                    white = p2
                    push_data.black = black
                    push_data.white = white
                    push_data.black_name = p1name
                    push_data.white_name = p2name

                    if(p1 == userId){
                        my_color = 1
                    }else{
                        my_color = 2
                    }
                    io.to(p1).emit("join_game_ser",{roomId:roomId,p1:p1,p2:p2,black:p1,white:p2,my_color:my_color,stage:push_data.stage,now_turn:push_data.now_turn,pass_counter:push_data.pass_counter,other_p2p_Id:p2p2,black_name:push_data.black_name,white_name:push_data.white_name})
                    io.to(roomId).emit("start_game",{roomId:roomId,p1:p1,p2:p2,black:p1,white:p2,my_color:my_color,stage:push_data.stage,now_turn:push_data.now_turn,pass_counter:push_data.pass_counter,other_p2p_Id:p2p1,black_name:push_data.black_name,white_name:push_data.white_name})
                }else if(co1 == 1){
                    black = p2
                    white = p1
                    push_data.black = black
                    push_data.white = white
                    push_data.black_name = p2name
                    push_data.white_name = p1name
                    if(p1 == userId){
                        my_color = 2
                    }else{
                        my_color = 1
                    }
                    io.to(p1).emit("join_game_ser",{roomId:roomId,p1:p1,p2:p2,black:p2,white:p1,my_color:my_color,stage:push_data.stage,now_turn:push_data.now_turn,pass_counter:push_data.pass_counter,other_p2p_Id:p2p2,black_name:push_data.black_name,white_name:push_data.white_name})
                    io.to(roomId).emit("start_game",{roomId:roomId,p1:p1,p2:p2,black:p2,white:p1,my_color:my_color,stage:push_data.stage,now_turn:push_data.now_turn,pass_counter:push_data.pass_counter,other_p2p_Id:p2p1,black_name:push_data.black_name,white_name:push_data.white_name})

                }
                
                games.push(push_data)
                console.log(games)
                // console.log(wait_match)
                // console.log(games)
                // console.log(joinRoomList)
            }
        }
    })

    socket.on("join_match",(data)=>{
        socket.join(data.roomId)
        joinRoomList[0].room = data.roomId
        // console.log(players)
    })
    socket.on("send_stage",(data)=>{
        try{
            let room;
            let change_turn;
            for (let i =0;games.length>i;i++){
                if(games[i].roomId == data.roomId){
                    room = games[i]
                    break
                }
            }
            try{
                room.stage = data.stage
                room.pass_counter = data.pass_counter
            }catch{
                
            }
            // console.log(";;;;;")
            // console.log(room)
            let next_user = ""
            if(data.now_turn == 1){
                change_turn = 2
                next_user = room.white
            }else{
                change_turn = 1
                next_user = room.black

            }
            // console.log(room.black)
            // console.log(room.white)

            io.to(room.roomId).emit("get_new_stage",{stage:room.stage,now_turn:change_turn})
            console.log(next_user)
            io.to(next_user).emit("mess",next_user)
            console.log(room)
        }catch{
            console.log("error")
        }
    })
    socket.on("end_game",(data)=>{
        joinRoomList[0].room = ""
        console.log("!o")
        socket.leave(data.room)

        io.to(joinRoomList[0].room).emit("discon_p2p",{})

        io.to(data.room).emit("end_room","end")

        // console.log(joinRoomList)
    })
    socket.on("delete_cons",(data)=>{
        let room_index = games.indexOf(data.room)
        games.splice(room_index,1)
        console.log("oooo")
        console.log(games)
    })



    //ここからルーム作成
    socket.on("mkroom_emit",(data)=>{
        let room_id = uuid.v4()
        socket.join(room_id)
        io.to(room_id).emit("send_private_id",{roomId:room_id,room_name:data.room_name})
        let p2p1 = ""
        let black_c = ""
        let white_c = ""
        let black_n = ""
        let white_n = ""
        if(data.color == "black"){
            black_c = data.userId
        }else if(data.color == "white"){
            white_c = data.userId
        }
        let push_data = {
            roomId:room_id,
            stage:[

                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,2,1,0,0,0],
                [0,0,0,1,2,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],

            ],
            room_name:data.room_name,
            p1:data.userId,
            p2:"",
            p2p1:p2pId,
            p2p2:"",
            p1name:user_name,
            p2name:"",
            now_turn:1,
            black:black_c,
            white:white_c,
            black_name:black_n,
            white_name:white_n,
            turn_time:data.turn_time,
            pass_counter:0,
            turn_timer:data.turn_time,
            turn_mode:data.color
        }
        wait_rooms.push(push_data)
        console.log(wait_rooms)
    })
    // socket.on("get_room_name",(data)=>{
    //     let co =0
    //     for(let i = 0;wait_rooms.length>i;i++){
    //         if(wait_rooms[i].roomId == data.id){
    //             co+=1
    //             io.to(data.userId).emit("return_send_name",{name:wait_rooms[i].room_name})
    //             break
    //         }
            
    //     }
    //     if(co == 0){
    //         io.to(data.userId).emit("return_send_name",{name:"undifind"})

    //     }
    // })
    socket.on("reqest_send_roomName",(data)=>{
        console.log("oooooooooooofdfsfdsoo")
        console.log(data)
        let room_name = ""
        for(let i = 0;wait_rooms.length>i;i++){
            if(data.id == wait_rooms[i].roomId){
                console.log(wait_rooms[i].room_name)
                console.log("jiiiiiiiiiiiiiiiiiiiiiiiiiijiji")
                io.to(data.userId).emit("response_send_roomName",{room_name:wait_rooms[i].room_name})
            }
            break
        }
    })
    socket.on("join_room",(data)=>{
        let co = 0
        console.log("kkkkkk")
        console.log(data)
        for (let i = 0;wait_rooms.length>i;i++){
            if(wait_rooms[i].roomId == data.roomId){
                wait_rooms[i].p2 = userId
                let co2 = null
                if(wait_rooms[i].turn_mode == "random"){
                    co2 = Math.floor(Math.random()*2)
                }else if(wait_rooms[i].turn_mode == "black"){
                    co2 = 0
                }else if(wait_rooms[i].turn_mode == "white"){
                    co2 = 1
                }
                let my_color_p1 = ""
                let my_color_p2 = ""

                let p1 = wait_rooms[i].p1
                let p2 = wait_rooms[i].p2
                joinRoomList[0].room = data.roomId
                wait_rooms[i].p2name =data.name
                if(co2 == 0){
                    wait_rooms[i].black = wait_rooms[i].p2
                    wait_rooms[i].white = wait_rooms[i].p1
                    wait_rooms[i].white_name = data.name
                    wait_rooms[i].black_name = wait_rooms[i].p1name

                    my_color_p2 = 1
                    my_color_p1 = 2
                    wait_rooms[i].black = p1

                    wait_rooms[i].white = p2

                    
                    console.log(0)

                }else{
                    wait_rooms[i].black = wait_rooms[i].p1
                    wait_rooms[i].white = wait_rooms[i].p2
                    my_color_p2 = 2
                    my_color_p1 = 1
                    wait_rooms[i].black = p2
                    wait_rooms[i].white = p1
                    wait_rooms[i].white_name =wait_rooms[i].p1name
                    wait_rooms[i].black_name =data.name
                    console.log(wait_rooms)

                    console.log(1)

                }
                console.log("おおおおお")
                console.log(user_info)
                for(let s = 0;user_info.length>s;s++){
                    if(user_info[s].userId == wait_rooms[i].p2){
                        console.log("おおおおおおお")
                        console.log(wait_rooms[i])
                        wait_rooms[i].p2p2 = user_info[s].p2pId
                        break
                    }
                }
                games.push(wait_rooms[i])
                console.log(games)
                let roomId = data.roomId

                wait_rooms[i].p2 = p2


                socket.join(roomId)
                io.to(p2).emit("join_game_ser",{roomId:roomId,p1:p1,p2:p2,black:wait_rooms[i].black,white:wait_rooms[i].white,my_color:my_color_p2,stage:wait_rooms[i].stage,now_turn:wait_rooms[i].now_turn,pass_counter:wait_rooms[i].pass_counter,other_p2p_Id:wait_rooms[i].p2p1,black_name:wait_rooms[i].black_name,white_name:wait_rooms[i].white_name,turn_time:wait_rooms[i].turn_time})
            io.to(p1).emit("start_game",{roomId:roomId,p1:p1,p2:p2,black:wait_rooms[i].black,white:wait_rooms[i].white,my_color:my_color_p1,stage:wait_rooms[i].stage,now_turn:wait_rooms[i].now_turn,pass_counter:wait_rooms[i].pass_counter,other_p2p_Id:wait_rooms[i].p2p2,black_name:wait_rooms[i].black_name,white_name:wait_rooms[i].white_name,turn_time:wait_rooms[i].turn_time})
                wait_rooms.splice(i,1)

                co = 1
                break
            }
        }
        if(co != 1){
            io.to(userId).emit("no_room","not_room")
        
        }
    })
    socket.on("completion_preparation_emit",(data)=>{
        if(game_prepar_list.indexOf(data.roomId) != -1){
            io.to(data.roomId).emit("completion_preparation_on",{})
            game_prepar_list.splice(game_prepar_list.indexOf(data.roomId),1)
            console.log(game_prepar_list)
            
        }else{
            console.log("保留")
            game_prepar_list.push(data.roomId)
            io.to(data.roomId).emit("other_preparation_on",{})

        }
    })
    socket.on("discon_match",(data)=>{
        if(wait_match.indexOf(data.userId) != -1){
            wait_match.splice(wait_match.indexOf(data.userId),1)
            console.log(wait_match)
        }
    })
    socket.on("remove_private_match",(data)=>{
        console.log("lllll")
        for(let i = 0;wait_rooms.length > i;i++){
            if(wait_rooms[i].roomId == data.roomId){
                wait_rooms.splice(i,1)
                console.log(wait_rooms)
                break
            }
        }


        
    })
    socket.on("discon_p2p_socket",(data)=>{
        io.to(data.userId).emit("discon_p2p",{})
    })

    socket.on("disconnect",()=>{

        console.log("koko")
        players.splice(players.indexOf(userId),1)
        if(wait_match.indexOf(userId) != -1){
            wait_match.splice(wait_match.indexOf(userId),1)
        }
        for(let i = 0;user_info.length>i;i++){
            if(user_info[i].userId == userId){
                user_info.splice(i,1)
                console.log(user_info)
                break
            } 
        }

        if(joinRoomList[0].room != ""){

            for(let i = 0;games.length>i;i++){
                if(games[i].roomId == joinRoomList[0].room){

                    games.splice(i,1)
                    io.to(joinRoomList[0].room).emit("end_game","end")
                    io.to(joinRoomList[0].room).emit("discon_p2p",{})

                    break
                }
            }

        }
        for(let i = 0;wait_rooms.length>i;i++){
            if(wait_rooms[i].p1 == userId){
                wait_rooms.splice(i,1)
                console.log(wait_rooms)
            }
        }
        // console.log(players)
        // console.log(wait_match)
        // console.log(games)

    })

})
server.listen(3000,()=>{
    console.log("server run")
})