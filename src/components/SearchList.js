import Search from './Search';

const SearchList = ({ results }) => {
  // Filter out empty results
  const filteredResults = results.filter(result => result.title && result.author && result.created_at);

  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="result">
      {filteredResults.length > 0 ? (
        filteredResults.map(item => (
          <div key={item.objectID} onClick={() => handleClick(item.url)}>
            <Search
              title={item.title}
              author={item.author}
              date={item.created_at}
            />
          </div>
        ))
      ) : (
        <p>No results</p>
      )}
    </div>
  );
};

export default SearchList;
