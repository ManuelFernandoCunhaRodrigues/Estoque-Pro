import Layout from "../../components/Layout/Layout";

export default function Home({ produtos }) {
  console.log(produtos);

  return (
    <Layout
      titulo="Painel de Controle"
      descricao="Visão geral do seu estoque e movimentações."
    >
      <h2>Conteúdo da Home</h2>
    </Layout>
  );
}
