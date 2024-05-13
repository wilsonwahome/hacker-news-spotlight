import Card from './UI/Card';
import './Search.css';

const HistoryList = (props) => {

  // Check if the user has searched with no input string
  const checkForDefault = () => {
    if (props.title === '') {
      return null;
    } else {
      return (
        <Card className="search">
          <div className="search__title">
            <h2>{props.title}</h2>
          </div>
        </Card>
      );
    }
  };

  return <ul>{checkForDefault()}</ul>;
};

export default HistoryList;
