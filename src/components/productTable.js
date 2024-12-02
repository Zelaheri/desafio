import ProductRow from "./productRow";
import ProductCategoryRow from "./productCategoryRow";

function ProductTable({ produtos: ListaProdutos }) {
    const linhasDaTabela = [];
    let ultimaCategoria = null;

    ListaProdutos.forEach((produtoDaLista) => {
        if (produtoDaLista.categoria !== ultimaCategoria) {
            linhasDaTabela.push(
                <ProductCategoryRow
                    categoria={produtoDaLista.categoria}
                    key={produtoDaLista.categoria} />
            );
        }
        linhasDaTabela.push(
            <ProductRow
                produto={produtoDaLista}
                key={produtoDaLista.nome} />
        );
        ultimaCategoria = produtoDaLista.categoria;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço (R$)</th>
                </tr>
            </thead>
            <tbody>{linhasDaTabela}</tbody>
        </table>
    );
}

export default ProductTable;