import './App.css';
import React, { useEffect, useState, Fragment } from 'react';
import { getData } from './api';
import Global from './components/Global';
import Countries from './components/Countries';

function App() {
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setGlobalData(await getData());
    }

    fetchData();
  }, []);

  return (
    <Fragment>
      <h1>App</h1>
      <Global data={globalData}/>
      <Countries />
    </Fragment>
  );
}

export default App;
