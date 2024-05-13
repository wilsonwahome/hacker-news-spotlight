import { Route, Redirect } from 'react-router-dom';

import Search from './pages/search';
import History from './pages/history';
import Home from './pages/Home';
import MainHeader from './components/MainHeader';
import SearchContext from './store/SearchContext';
import { useMemo, useState } from 'react';

function App() {
  const [searchHistory, setSearchHistory] = useState('');

  // memorize search history using useMemo
  const providerSearch = useMemo(
    () => ({ searchHistory, setSearchHistory }),
    [searchHistory, setSearchHistory]
  );

  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <SearchContext.Provider value={providerSearch}>
          <Route path="/search" component={Search} />
          <Route path="/history" component={History} />
        </SearchContext.Provider>
      </main>
    </div>
  );
}

export default App;
