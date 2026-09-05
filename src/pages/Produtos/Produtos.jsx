import Layout from "../../components/Layout/Layout";

export default function Produtos({ produtos }) {
  console.log(produtos);
  return (
    <Layout
      titulo="Produtos"
      descricao="Gerencie todos os produtos cadastrados."
    >
      <h2>Lista de Produtos</h2>
      {produtos.map((produto) => {
        return (
          <div key={produto.sku}>
            <h3>{produto.nome}</h3>

            <p>Categoria: {produto.categoria}</p>
            <p>SKU: {produto.sku}</p>
            <p>Preço: R$ {produto.preco}</p>
            <p>Status: {produto.verificarStatus()}</p>
            <p>Valor em estoque: R$ {produto.calcularValorEstoque()}</p>
          </div>
        );
      })}
    </Layout>
  );
}
