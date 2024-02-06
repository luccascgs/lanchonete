const sql = require("../configs/db");

// construtor
const ProdutoModel = function(produto){
    this.nome = produto.nome;
    this.valor = produto.valor;
}

ProdutoModel.create = (produto, result) =>{
    sql.query("INSERT INTO produtos SET ?", produto, (err, res) => {
        if(err){
            console.log("Erro: ", err)
            result(err, null);
            return
        }
        console.log("Produto criado: ", {idproduto: res.insertid, ...produto});
        result(null, {idproduto: res.insertid, ...produto});
    })
};

ProdutoModel.findById = (id, result) => {
};

ProdutoModel.getAll = result => {
};

ProdutoModel.updateById = (id, produto, result) => {
};

ProdutoModel.remove = (id, result) => {
};

ProdutoModel.removeAll = (result) => {
};

module.exports = ProdutoModel;