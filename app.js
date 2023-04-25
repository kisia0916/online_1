const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const io = require("socket.io")(server)
const body_pase = require("body-parser")
const path = require("path")
const fs = require("fs")
const ejs = require("ejs")
const uuid = require('node-uuid');
const { resolveModuleName } = require("typescript")
const { SocketAddress } = require("net")
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

app.get("/game",(req,res)=>{
    let html = ejs.render(index_page,{

    })
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(html)
    res.end()
})
app.get("/mkroom",(req,res)=>{
    let html = ejs.render(index_page,{

    })
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(html)
    res.end()
})
app.get("/join",(req,res)=>{
    let html = ejs.render(index_page,{

    })
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(html)
    res.end()
})
let wait_match = []
let games = []
let players = []
let wait_rooms = []
io.on("connection",(socket)=>{
    console.log("ff")
    let userId = uuid.v4()
    let joinRoomList = [{room:""},{user:""}]//このユーザーが入っているsocketのrooomの情報
    socket.join(userId)
    players.push(userId)

    io.to(userId).emit("set_data",{userId:userId})
    joinRoomList[1].user = userId
    socket.on("join_matching",(data)=>{
        if(wait_match.indexOf(userId) == -1){
            // console.log(userId)
            wait_match.push(userId)
            if(wait_match.length >=2){
                let p1 = ""
                let p2 = ""
                p1 = wait_match[0]
                p2 = wait_match[1]
                console.log(wait_match)
                console.log(wait_match[0])
                console.log(wait_match[1])

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
                    now_turn:1,
                    black:black,
                    white:white,
                    pass_counter:0
                }
                if(co1 == 0){
                    black = p1
                    white = p2
                    push_data.black = black
                    push_data.white = white

                    if(p1 == userId){
                        my_color = 1
                    }else{
                        my_color = 2
                    }
                    io.to(p1).emit("join_game_ser",{roomId:roomId,p1:p1,p2:p2,black:p1,white:p2,my_color:my_color,stage:push_data.stage,now_turn:push_data.now_turn,pass_counter:push_data.pass_counter})
                    io.to(roomId).emit("start_game",{roomId:roomId,p1:p1,p2:p2,black:p1,white:p2,my_color:my_color,stage:push_data.stage,now_turn:push_data.now_turn,pass_counter:push_data.pass_counter})
                }else if(co1 == 1){
                    black = p2
                    white = p1
                    push_data.black = black
                    push_data.white = white
                    if(p1 == userId){
                        my_color = 2
                    }else{
                        my_color = 1
                    }
                    io.to(p1).emit("join_game_ser",{roomId:roomId,p1:p1,p2:p2,black:p2,white:p1,my_color:my_color,stage:push_data.stage,now_turn:push_data.now_turn,pass_counter:push_data.pass_counter})
                    io.to(roomId).emit("start_game",{roomId:roomId,p1:p1,p2:p2,black:p2,white:p1,my_color:my_color,stage:push_data.stage,now_turn:push_data.now_turn,pass_counter:push_data.pass_counter})

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
        socket.leave(data.room)
        console.log("!o")
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
        io.to(room_id).emit("send_private_id",{roomId:room_id})
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
            p1:data.userId,
            p2:"",
            now_turn:1,
            black:"",
            white:"",
            pass_counter:0
        }
        wait_rooms.push(push_data)
        console.log(wait_rooms)
    })

    socket.on("join_room",(data)=>{
        let co = 0
        for (let i = 0;wait_rooms.length>i;i++){
            if(wait_rooms[i].roomId == data.roomId){
                wait_rooms[i].p2 = userId
                let co2 = Math.floor(Math.random()*2)
                let my_color_p1 = ""
                let my_color_p2 = ""

                let p1 = wait_rooms[i].p1
                let p2 = wait_rooms[i].p2
                joinRoomList[0].room = data.roomId

                if(co2 == 0){
                    wait_rooms[i].black = wait_rooms[i].p2
                    wait_rooms[i].white = wait_rooms[i].p1
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
                    console.log(1)

                }
                games.push(wait_rooms[i])
                console.log(games)
                let roomId = data.roomId

                wait_rooms[i].p2 = p2

                socket.join(roomId)
                io.to(p2).emit("join_game_ser",{roomId:roomId,p1:p1,p2:p2,black:wait_rooms[i].black,white:wait_rooms[i].white,my_color:my_color_p2,stage:wait_rooms[i].stage,now_turn:wait_rooms[i].now_turn,pass_counter:wait_rooms[i].pass_counter})
                io.to(roomId).emit("start_game",{roomId:roomId,p1:p1,p2:p2,black:wait_rooms[i].black,white:wait_rooms[i].white,my_color:my_color_p1,stage:wait_rooms[i].stage,now_turn:wait_rooms[i].now_turn,pass_counter:wait_rooms[i].pass_counter})
                wait_rooms.splice(i,1)

                co = 1
                break
            }
        }
        if(co != 1){
            io.to(userId).emit("no_room","not_room")
        
        }
    })


    socket.on("disconnect",()=>{
        console.log("koko")
        players.splice(players.indexOf(userId),1)
        if(wait_match.indexOf(userId) != -1){
            wait_match.splice(wait_match.indexOf(userId),1)
        }

        if(joinRoomList[0].room != ""){

            for(let i = 0;games.length>i;i++){
                if(games[i].roomId == joinRoomList[0].room){

                    games.splice(i,1)
                    io.to(joinRoomList[0].room).emit("end_game","end")
                    break
                }
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