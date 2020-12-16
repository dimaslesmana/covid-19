import React, { useEffect, useState, Fragment } from 'react';
import Moment from 'react-moment';
import CountUp from 'react-countup';

import { getData } from '../api';
import Loading from './Loading';

const Global = () => {
  const [globalData, setGlobalData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      setGlobalData(await getData());
    };

    fetchData();
  }, []);

  if (!globalData) {
    return <Loading />
  }

  const { confirmed, recovered, deaths, lastUpdate } = globalData;
  return (
    <Fragment>
      <h1 style={{textAlign: "center"}}>Global Data</h1>
      <p style={{textAlign: "center"}}>
        Confirmed: <CountUp start={0} end={confirmed.value} duration={1} separator="." /><br />
        Recovered: <CountUp start={0} end={recovered.value} duration={1} separator="." /><br />
        Deaths: <CountUp start={0} end={deaths.value} duration={1} separator="." /><br />
        Last Update: <Moment date={lastUpdate} format="DD MMMM YYYY HH:mm" /><br />
      </p>
    </Fragment>
  );
};

export default Global;
