const url_join = (id)=>{
    // Socket.emit("send_set_data","")
    join_room_url(id)
    console.log("unnko")
}
const copy_text = async(text)=>{
    let id_space = document.querySelector(".joinID12")
    id_space.select()
    document.execCommand("Copy")

}
const copy_text2 = async(text)=>{
    let id_space = document.querySelector(".joinURL12")
    id_space.select()
    document.execCommand("Copy")

}