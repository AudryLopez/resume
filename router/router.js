const Router = require("express").Router()
const {join} = require("path")


Router.get("/*", (req, res, next)=>{
    if(req.path.includes(".html")){
        if(req.path.includes("index")){
            return res.redirect("/");
        }
        if(req.path.includes("page-about")){
            return res.redirect("/nosotros");
        }
        if(req.path.includes("page-contact")){
            return res.redirect("/contactos");
        }
        if(req.path.includes("products")){
            return res.redirect("/productos");
        }
    }
    return next()
})

Router.get("/", (req, res)=>{
    let path = join(__dirname, "../html/index.html")
    return res.sendFile(path)
})

Router.get("/productos", (req, res)=>{
    let path = join(__dirname, "../html/products.html")
    return res.sendFile(path)
})

Router.get("/nosotros", (req, res)=>{
    let path = join(__dirname, "../html/page-about.html")
    return res.sendFile(path)
})

Router.get("/contactos", (req, res)=>{
    let path = join(__dirname, "../html/page-contact.html")
    return res.sendFile(path)
})


module.exports = Router