import SearchBar from './searchBar';
import ProductTable from './productTable';

function FilterableProductTable({ produtos: ListaProdutos }) {
    return (
        <div>
            <SearchBar />
            <ProductTable
                produtos={ListaProdutos} />
        </div>
    );
}

export default FilterableProductTable;