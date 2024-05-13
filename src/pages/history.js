import { useContext } from 'react';
import HistoryList from '../components/HistoryList';
import SearchContext from '../store/SearchContext';

const History = () => {
  const searchResults = useContext(SearchContext).searchHistory;

  let data = [];

  if (searchResults) {
    data = searchResults || [];
  }

  return (
    <div className="result">
      {data.map((item) => (
        <HistoryList key={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default History;
