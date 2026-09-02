import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <div>
        <h1>{props.titulo}</h1>
        <p>{props.descricao}</p>
      </div>
    </header>
  );
}
