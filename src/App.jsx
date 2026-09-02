import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./pages/Home/Home.jsx";
import Produtos from "./pages/Produtos/Produtos.jsx";
import Estoque from "./pages/Estoque/Estoque.jsx";
import Relatorios from "./pages/Relatorios/Relatorios.jsx";
import Movimentacoes from "./pages/Movimentacoes/Movimentacoes.jsx";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Header
        titulo="Painel de Controle"
        descricao="Visão geral do seu estoque e movimentações."
      />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/movimentacoes" element={<Movimentacoes />} />
        </Routes>
      </main>
    </div>
  );
}
