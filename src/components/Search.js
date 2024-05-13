import Card from './UI/Card';
import './Search.css';
import SearchDate from './SearchDate';

const Search = (props) => {
  return (
    <ul>
      <Card className="search">
        <SearchDate date={props.date}/>
        <div className="search__title">
          <h2>{props.title}</h2>
          <div className="search__author">{props.author}</div>
        </div>
      </Card>
    </ul>
  );
};

export default Search;
