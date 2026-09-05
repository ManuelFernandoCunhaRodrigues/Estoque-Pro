class Produto {
    constructor(nome, categoria, sku, preco, quantidade, estoqueMinimo) {
        this.nome = nome;
        this.categoria = categoria;
        this.sku = sku;
        this.preco = preco;
        this.quantidade = quantidade;
        this.estoqueMinimo = estoqueMinimo;
    }
    calcularValorEstoque = () => {
        return this.preco * this.quantidade
    }
    verificarStatus = () => {
        if (this.quantidade === 0) {
            return "Sem estoque";
        } else if (this.quantidade <= this.estoqueMinimo) {
            return "Estoque baixo";
        } else {
            return "Em estoque";
        }
    }
}

export default Produto;