import Produto from "../models/Produtos";

const mouse = new Produto(
    "Mouse Gamer",
    "Periféricos",
    "MOU-001",
    150,
    10,
    5
)

console.log(mouse)
console.log(mouse.calcularValorEstoque())
console.log(mouse.verificarStatus())