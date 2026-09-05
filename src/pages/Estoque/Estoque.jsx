import Layout from "../../components/Layout/Layout";

export default function Estoque({ produtos }) {
  console.log(produtos);

  return (
    <Layout titulo="Estoque" descricao="Acompanhe os níveis do seu estoque.">
      <h2>Controle de Estoque</h2>
    </Layout>
  );
}
