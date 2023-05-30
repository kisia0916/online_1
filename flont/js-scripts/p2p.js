let conn = undefined
const p2pIds = ()=>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
    )
const p2pId = p2pIds()
const peer = new Peer(p2pId, {
    host: "localhost",
    port: 9000,
    path: '/'
  });
const connection_p2p = (id)=>{
    if(peer){
        try{
            conn = peer.connect(id)
            console.log("せつそくううううう")
            conn.on('open',()=>{
                console.log('接続に成功しました')
            
            })
        }catch{
            console.log("test")
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
		alert(data)
	});
});

