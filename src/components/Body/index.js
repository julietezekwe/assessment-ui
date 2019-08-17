import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import _ from 'lodash';
import { fetchNumbers } from '../../api';
import TableComponent from '../Table';

const About = () => {
  const [numbers, setNumbers] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const limit = 10000;


  useEffect(() => {
    const getHistory = async () => {
     try {
      setLoading(true)
      const allNumbers = await fetchNumbers(limit, 1);
      setActivePage(1);
      setHasNextPage(allNumbers.hasNext);
      setNumbers(allNumbers.docs);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw error
    }         
  };

  getHistory();
}, [setHasNextPage]);

const handLoadMore = async () => {
  setLoading(true) 
  const allNumbers = await fetchNumbers(limit, activePage + 1);
  setActivePage(activePage + 1);
  const uniqueNumbers = _.uniqBy([...numbers, ...allNumbers.docs], 'number');
  setHasNextPage(allNumbers.hasNext)
  setNumbers(uniqueNumbers);
  setLoading(false)
}

const handleBackToTop = async () => { 
  window.scrollTo(0, 0);
}

return (
    <>
    <TableComponent data={numbers.length ? numbers : []} />
    <Button disabled={!hasNextPage || loading} secondary onClick={handLoadMore}> {loading ? "Loading..." : "Load more"}</Button> <Button secondary onClick={handleBackToTop}>Back to top </Button>
    </>
  );
};

export default About;
