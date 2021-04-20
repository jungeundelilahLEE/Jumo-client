/* eslint-disable no-return-assign */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// import res from './dummyMaks';

const useSearchItem = (query, pageNum) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [makgeolls, setMakgeolls] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  //   const sendQuery = useCallback(async () => {
  //     try {
  //       await setIsLoading(true);
  //       await setError(false);
  //       const res = await axios.get(
  //         `https://jumoserver.ml/makgeolli/info?name=${query}&page=${pageNum}`,
  //       );
  //       //   await setBooks(prev => [...new Set([...prev, ...res.data.data])]);
  //       await setBooks(prev => [
  //         ...new Set([...prev, ...res.data.data.map(d => d.name)]),
  //       ]);
  //       await setHasMore(res.data.data.length > 0);
  //       setIsLoading(false);
  //     } catch (err) {
  //       setError(err);
  //     }
  //   }, [query, pageNum]);

  //   useEffect(() => {
  //     sendQuery(query);
  //   }, [query, sendQuery, pageNum]);

  // code
  useEffect(() => {
    setMakgeolls([]);
  }, [query]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    let cancel;

    setIsLoading(true);
    setError(false);

    axios
      // .get(`https://openlibrary.org/search.json?q=${query}&page=${pageNum}`, {
      .get(`https://jumoserver.ml/makgeolli/info`, {
        cancelToken: new CancelToken(c => (cancel = c)),
        pageNum,
      })
      .then(res => {
        setMakgeolls(prev => {
          return [...new Set([...prev, ...res.data.data])];
        });
        setHasMore(res.data.data.length > 0);
        setIsLoading(false);
      })
      .catch(err => {
        if (axios.isCancel(err)) return;
        setError(err);
      });

    return () => cancel();
  }, [query, pageNum]);

  return { isLoading, error, makgeolls, hasMore };
};

export default useSearchItem;
