module.exports = app => {
    const produtoController = require("../controllers/produto.controller");

    app.post("/produtos", produtoController.create);
    app.get("/produtos", produtoController.findAll);
    app.get("/produtos/:id", produtoController.findById);
    app.put("/produtos/:id", produtoController.update);
    app.delete("/produtos/:id", produtoController.delete);
    app.delete("/produtos", produtoController.deleteAll);
}