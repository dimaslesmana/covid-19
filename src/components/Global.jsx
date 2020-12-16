import React, { Fragment } from 'react';
import Moment from 'react-moment';

import { formatNumber } from '../formatNumber';
import Loading from './Loading';

const Global = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Loading />
  }

  return (
    <Fragment>
      <h1 style={{textAlign: "center"}}>Global Data</h1>
      <p style={{textAlign: "center"}}>
        Confirmed: {formatNumber(confirmed.value)}<br />
        Recovered: {formatNumber(recovered.value)}<br />
        Deaths: {formatNumber(deaths.value)}<br />
        Last Update: <Moment date={lastUpdate} format="DD MMMM YYYY HH:mm" /><br />
      </p>
    </Fragment>
  );
};

export default Global;
