const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();

// parser para requisições content-type:
// express.application/x-wwww-form-urlencoded-json
app.use(express.urlencoded({extended:true}));

// linhas das rotas
require("./app/routes/produto.routes")(app);

app.get("/", (req, res) =>{
    res.json({
        message: "Bem vindo à API MVC do SENAC"
    })
});

app.listen(3001,()=>{
    console.log("Servidor rodando na porta 3001! 🚀");
});