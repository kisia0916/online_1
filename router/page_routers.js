const router = require("express").Router()
const ejs = require("ejs")
const fs = require("fs")
const index_page = fs.readFileSync("./views/index.ejs","utf-8")

router.get("/mkroom",(req,res)=>{
    load_fun(req,res)
})
router.get("/join",(req,res)=>{
    load_fun(req,res)

})
router.get("/waitmatch",(req,res)=>{
    load_fun(req,res)

})
router.get("/offline",(req,res)=>{
    load_fun(req,res)
})
router.get("/game",(req,res)=>{
    load_fun(req,res)

})
router.get("/modeselect",(req,res)=>{
    load_fun(req,res)

})
router.get("/urljoin/:id",(req,res)=>{
    load_fun(req,res)
})
router.get("/privateroom",(req,res)=>{
    load_fun(req,res)
})

const load_fun = (req,res)=>{
    let html = ejs.render(index_page,{

    })
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(html)
    res.end()
}
module.exports = router