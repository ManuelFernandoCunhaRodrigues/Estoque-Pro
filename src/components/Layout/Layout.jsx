import Sidebar from "../Sidebar/Sidebar.jsx";
import Header from "../Header/Header.jsx";
import "./Layout.css";

export default function Layout({ children, titulo, descricao }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-content">
        <Header titulo={titulo} descricao={descricao} />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
