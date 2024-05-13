import moment from 'moment';

import './SearchDate.css';

function SearchDate(props) {
  let month = '';

  //const month = moment.utc(props.date).format('MM');
  const year = moment.utc(props.date).format('YYYY');
  const day = moment.utc(props.date).format('DD');
  
  switch (moment.utc(props.date).format('MM')) {
    case '01':
      month = 'January';
      break;
    case '02':
      month = 'February';
      break;
    case '03':
      month = 'March';
      break;
    case '04':
      month = 'April';
      break;
    case '05':
      month = 'May';
      break;
    case '06':
      month = 'June';
      break;
    case '07':
      month = 'July';
      break;
    case '08':
      month = 'August';
      break;
    case '09':
      month = 'September';
      break;
    case '10':
      month = 'October';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'December';
      break;
    default:
      month = '';
  }

  return (
    <div className="search-date">
      <div className="search-date__year">{year}</div>
      <div className="search-date__month">{month}</div>
      <div className="search-date__day">{day}</div>
    </div>
  );
}

export default SearchDate;
