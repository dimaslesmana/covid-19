import React, { Fragment } from 'react';
import { formatNumber } from '../formatNumber';
import Loading from './Loading';

const Global = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Loading />
  }

  return (
    <Fragment>
      <h1>Global Data</h1>
      <p>
        Confirmed: {formatNumber(confirmed.value)}<br />
        Recovered: {formatNumber(recovered.value)}<br />
        Deaths: {formatNumber(deaths.value)}<br />
        Last Update: {lastUpdate}<br />
      </p>
    </Fragment>
  );
};

export default Global;
