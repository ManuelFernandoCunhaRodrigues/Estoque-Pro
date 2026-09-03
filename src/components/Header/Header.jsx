import "./Header.css";

export default function Header({ titulo, descricao }) {
  return (
    <header className="header">
      <div>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
    </header>
  );
}
