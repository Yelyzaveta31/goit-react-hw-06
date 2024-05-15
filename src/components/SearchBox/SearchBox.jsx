import s from "./SearchBox.module.css";

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className={s.boxContainer}>
      <label htmlFor="searchID">Find contacts by name</label>
      <input
        className={s.boxInput}
        placeholder="Search contacts..."
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        id="searchId"
      ></input>
    </div>
  );
};

export default SearchBox;
