function SearchBar() {
    return (
        <form>
            <input placeholder="Search..." />
            <label>
                <input type="checkbox" />
                Only show products in stock
            </label>
        </form>
    );
}

export default SearchBar;