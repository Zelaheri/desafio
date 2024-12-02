import FilterableProductTable from './components/filterableProductTable';

// Lista de produtos
const ListaProdutos = [
  { categoria: "Frutas", preco: 1.99, emEstoque: true, nome: "Abacaxi" },
  { categoria: "Frutas", preco: 1.49, emEstoque: true, nome: "Tangerina" },
  { categoria: "Frutas", preco: 2.99, emEstoque: false, nome: "Limão" },
  { categoria: "Vegetais", preco: 2.99, emEstoque: true, nome: "Cheiro-verde" },
  { categoria: "Vegetais", preco: 4.99, emEstoque: false, nome: "Rúcula" },
  { categoria: "Vegetais", preco: 3.99, emEstoque: true, nome: "Alho-poró" }
];

function App() {
  return (
    <div>
      <FilterableProductTable produtos={ListaProdutos} />
    </div>
  );
}

export default App;

