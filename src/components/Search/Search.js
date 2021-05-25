import "./Search.css";

function Search(props) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Search;
