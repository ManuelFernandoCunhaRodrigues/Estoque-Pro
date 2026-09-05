import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Produtos from "./pages/Produtos/Produtos.jsx";
import Estoque from "./pages/Estoque/Estoque.jsx";
import Relatorios from "./pages/Relatorios/Relatorios.jsx";
import Movimentacoes from "./pages/Movimentacoes/Movimentacoes.jsx";
import produtosIniciais from "./data/produtos.js";
import { useState } from "react";

export default function App() {
  const [produtos, setProduto] = useState(produtosIniciais);
  console.log(produtos);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos produtos={produtos} />} />
      <Route path="/estoque" element={<Estoque produtos={produtos} />} />
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/movimentacoes" element={<Movimentacoes />} />
    </Routes>
  );
}
