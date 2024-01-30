const produtos = [
  {
    id: 1,
    nome: "Spicy Burguer",
    descricao: "Hambúrguer de 250g, queijo, tomate, alface e cebola",
    preco: 24.9,
    foto: "http://jornadajs-food.s3.amazonaws.com/spicy.png",
  },
  {
    id: 2,
    nome: "Sanduba",
    descricao: "Sanduíche natural, alface, tomate, pão integral e orégano",
    preco: 22.0,
    foto: "http://jornadajs-food.s3.amazonaws.com/sanduba.png",
  },
  {
    id: 3,
    nome: "Super Burguer",
    descricao: "Hambúrguer de 300g, molho, queijo, tomate, alface e cebola",
    preco: 29.9,
    foto: "http://jornadajs-food.s3.amazonaws.com/super.png",
  },
  {
    id: 4,
    nome: "Mega",
    descricao: "Hambúrguer de 300g, maionese, queijo, tomate, alface e cebola",
    preco: 34.9,
    foto: "http://jornadajs-food.s3.amazonaws.com/mega.png",
  },
  {
    id: 5,
    nome: "Penne",
    descricao:
      "Penne ao molho especial de tomates rústicos, ervas aromáticas e cebola",
    preco: 27.0,
    foto: "http://jornadajs-food.s3.amazonaws.com/penne.png",
  },
  {
    id: 6,
    nome: "Fritas",
    descricao: "Batata frita crocante com molho especial de maionese da casa",
    preco: 14.9,
    foto: "http://jornadajs-food.s3.amazonaws.com/fritas.png",
  },
  {
    id: 7,
    nome: "Coca-Cola Lata",
    descricao: "Coca-Cola em lata de 300ml, trincando para você",
    preco: 9.9,
    foto: "http://jornadajs-food.s3.amazonaws.com/coca.png",
  },
];

const pedidos = [
  { id_pedido: 5461, dt: "14/01/2024", total: 150.3 },
  { id_pedido: 5462, dt: "19/01/2024", total: 250.3 },
  { id_pedido: 5463, dt: "22/01/2024", total: 50.3 },
  { id_pedido: 5464, dt: "14/02/2024", total: 55.3 },
  { id_pedido: 5465, dt: "17/02/2024", total: 25.3 },
  { id_pedido: 5465, dt: "25/03/2024", total: 170.3 },
];

const carrinho = [
    {
        id: 1,
        nome: "x-tudo",
        preco: 20.00,
        foto: "http://jornadajs-food.s3.amazonaws.com/spicy.png",
        qtd: 2
    },
    {
        id: 2,
        nome: "Sanduba",
        preco: 15.00,
        foto: "http://jornadajs-food.s3.amazonaws.com/sanduba.png",
        qtd: 1
    },
]

export { produtos, pedidos, carrinho };
