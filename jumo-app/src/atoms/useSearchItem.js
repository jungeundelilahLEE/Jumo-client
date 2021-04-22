/* eslint-disable no-return-assign */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// import res from './dummyMaks';

const useSearchItem = (query, pageNum) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pick, setPick] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setPick([]);
  }, [query]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    let cancel;

    setIsLoading(true);
    setError(false);

    axios
      .get(
        `https://jumoserver.ml/makgeolli/info?query=${query}&pageNum=${pageNum}`,
        {
          cancelToken: new CancelToken(c => (cancel = c)),
        },
      )
      .then(res => {
        setPick(prev => {
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

  return { isLoading, error, pick, hasMore };
};

export default useSearchItem;
