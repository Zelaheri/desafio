function ProductRow({ produto }) {
    const nome = produto.emEstoque ? produto.nome :
        <span style={{ color: 'red' }}>
            {produto.nome}
        </span>;

    return (
        <tr>
            <td>{nome}</td>
            <td>{produto.preco.toFixed(2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </tr>
    );
}

export default ProductRow;