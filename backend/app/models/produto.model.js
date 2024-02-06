const sql = require("../configs/db");

// construtor
const ProdutoModel = function (produto) {
    this.nome = produto.nome;
    this.valor = produto.valor;
}

ProdutoModel.create = (produto, result) => {
    sql.query("INSERT INTO produtos SET ?", produto, (err, res) => {
        if (err) {
            console.log("Erro: ", err)
            result(err, null);
            return
        }
        console.log("Produto criado: ", { idproduto: res.insertid, ...produto });
        result(null, { idproduto: res.insertid, ...produto });
    });
};

ProdutoModel.getAll = result => {
    sql.query("SELECT * FROM produtos", (err, res) => {
        if (err) {
            console.log("Erro: ", err)
            result(null, err);
            return
        }
        console.log("Produtos: ", res);
        result(null, res);
    });
};

ProdutoModel.findById = (id, result) => {
    sql.query("SELECT * FROM produtos WHERE idproduto = " + id, (err,
        res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        if (res.length) {
            console.log("Produto Encontrado: ", res[0]);
            result(null, res[0]);
        } else {
            result({ type: "not_found" }, null);
            console.log("Produto não encontrado");
        }
    })
};

ProdutoModel.updateById = (id, produto, result) => {
    sql.query("UPDATE produtos SET nome = ?, valor = ? WHERE idproduto = ? ", [produto.nome, produto.valor, id], (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
        }
        else if (res.affectedRows == 0) {
            result({ type: "not_found" }, null);
        }
        else {
            console.log("Produto atualizado: ", {
                idproduto: id,
                ...produto
            });
            result(null, { idproduto: id, ...produto });
        }
    });
}


ProdutoModel.remove = (id, result) => {
    sql.query("DELETE FROM produtos WHERE idproduto = ?", id, (err,
        res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ type: "not_found" }, null);
        } else {
            result(null, res);
        }
    });
}

ProdutoModel.removeAll = (result) => {
    sql.query("DELETE FROM produtos ", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err);
        } else {
            result(null);
        }
    });
}

module.exports = ProdutoModel;