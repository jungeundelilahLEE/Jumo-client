import React, { useState, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useSearchItem from './atoms/useSearchItem';
import GlobalStyles from './styles/GlobalStyles';
import Detail from './pages/Detail';
import Makgeollis from './pages/Makgeollis';
import Brewerys from './pages/Brewerys';
import Nav from './pages/Nav';
import Header from './pages/header';

const App = () => {
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, error, books, hasMore } = useSearchItem(query, pageNum);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    node => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum(prev => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  const handleChange = e => {
    setQuery(e.target.value);
    setPageNum(1);
  };

  return (
    <Router>
      <div>
        <GlobalStyles />
        <Header handleChange={handleChange} value={query} />
        <Nav />
        <Switch>
          <Route exact path="/makgeolli/info">
            <Makgeollis
              lastBookElementRef={lastBookElementRef}
              books={books}
              isLoading={isLoading}
              error={error}
            />
          </Route>
          <Route exact path="/makgeolli/list/:makId">
            <Detail />
          </Route>
          <Route exact path="/brewery/info">
            <Brewerys />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
