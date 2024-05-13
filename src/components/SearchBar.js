import { useState } from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState('');

  const inputHandler = (event) => {
    const text = event.target.value;

    setSearchText(text);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    onSearch(searchText);
    setSearchText(''); //clear search
  };

  return (
    <div className="search-bar">
      <form onSubmit={submitHandler}>
        <div className="search-form__controls">
          <div className="search-form__control">
            <label>Search</label>
            <input
              type="text"
              value={searchText}
              onChange={inputHandler}
              placeholder="Enter title"
            />
          </div>
        </div>
        <div className="search-form__actions">
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
