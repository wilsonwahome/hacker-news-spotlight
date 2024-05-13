import Search from './Search';

const SearchList = ({ results }) => {
  let data = [];

  if (results) {
    data = results || [];
  }

  return (
    <div className="result">
      {data.map((item) => (
        <Search
          key={item.objectID}
          title={item.title}
          author={item.author}
          date={item.created_at}
        />
      ))}
    </div>
  );
};

export default SearchList;
