import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const menuItens = [
    {
      nome: "Home",
      rota: "/",
    },
    {
      nome: "Produtos",
      rota: "/produtos",
    },
    {
      nome: "Estoque",
      rota: "/estoque",
    },
    {
      nome: "Movimentações",
      rota: "/movimentacoes",
    },
    {
      nome: "Relatórios",
      rota: "/relatorios",
    },
  ];
  return (
    <aside className="sidebar">
      <h2>EstoquePro</h2>
      <nav>
        {menuItens.map((item) => {
          return (
            <NavLink
              key={item.nome}
              to={item.rota}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.nome}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
