let conn = undefined
const p2pIds = ()=>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
    )
const p2pId = p2pIds()
const peer = new Peer(p2pId);
const connection_p2p = (id)=>{
    console.log("connection")
    if(peer){
        try{
            conn = peer.connect(id)
            console.log("せつそくうううううo")
            conn.on('open',()=>{
                console.log('接続に成功しました')
            
            })
        }catch{
            console.log("接続エラー")
        }
    }
}
const discon_p2p = ()=>{
    conn = undefined
}
const send_p2p = (mess) =>{
    conn.send(mess)
}
peer.on('connection', conn => {
    console.log("setuzoku")
	conn.on('data', data => {
		if(data.type == "timer"){
            timer_update(data.data)
        }
	});
});

const send_p2pTimer = ()=>{
    if(conn){
        conn.send({type:"timer",data:now_timer})
    }
}