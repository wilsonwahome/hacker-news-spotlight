import SearchList from '../components/SearchList';
import SearchBar from '../components/SearchBar';

import HackerNews from '../api/HackerNews';
import { useContext, useState } from 'react';
import SearchContext from '../store/SearchContext';

const Search = () => {
  const { setSearchHistory } = useContext(SearchContext);

  const [search, setSearch] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await HackerNews.get(text);

    setSearchHistory((prevHistory) => {
      return [{ title: text, id: Math.random().toString() }, ...prevHistory];
    });

    setSearch((prevState) => {
      return { ...prevState, results: results.data.hits };
    });
  };

  return (
    <div>
      <div>
        <h1>
          Hacker News Spotlight
        </h1>
        <SearchBar onSearch={onSearch} />
        <SearchList results={search.results} />
      </div>
    </div>
  );
};

export default Search;
