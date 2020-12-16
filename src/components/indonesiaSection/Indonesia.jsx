import React, { useEffect, useState, Fragment } from 'react';
import Moment from 'react-moment';
import CountUp from 'react-countup';

import { getIndonesiaData } from '../../api';
import Loading from '../Loading';

const Indonesia = () => {
  const [dataTotal, setDataTotal] = useState(null);
  const [dataPenambahan, setDataPenambahan] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const { total, penambahan } = await getIndonesiaData();
      setDataTotal(total);
      setDataPenambahan(penambahan);
    };

    fetchAPI();
  }, []);

  const DataTotal = ({ dataTotal }) => {
    if (!dataTotal) {
      return <Loading />
    }

    const { positif, dirawat, sembuh, meninggal, lastUpdate } = dataTotal;
    return (
      <p style={{ textAlign: "center" }}>
        Positif: <CountUp start={0} end={positif} duration={1} separator="." /><br />
        Dirawat: <CountUp start={0} end={dirawat} duration={1} separator="." /><br />
        Sembuh: <CountUp start={0} end={sembuh} duration={1} separator="." /><br />
        Meninggal: <CountUp start={0} end={meninggal} duration={1} separator="." /><br />
        Last Update: <Moment date={lastUpdate} format="DD MMMM YYYY HH:mm" /><br />
      </p>
    );
  };

  const DataPenambahan = ({ dataPenambahan }) => {
    if (!dataPenambahan) {
      return <Loading />
    }

    const { positif, dirawat, sembuh, meninggal, created } = dataPenambahan;
    return (
      <Fragment>
        <h2 style={{ textAlign: "center" }}>Penambahan Hari Ini</h2>
        <p style={{ textAlign: "center" }}>
          Positif: <CountUp start={0} end={positif} duration={1} separator="." /><br />
          Dirawat: <CountUp start={0} end={dirawat} duration={1} separator="." /><br />
          Sembuh: <CountUp start={0} end={sembuh} duration={1} separator="." /><br />
          Meninggal: <CountUp start={0} end={meninggal} duration={1} separator="." /><br />
          Last Update: <Moment date={created} format="DD MMMM YYYY HH:mm" /><br />
        </p>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Indonesia Data</h1>
      <DataTotal dataTotal={dataTotal} />
      <DataPenambahan dataPenambahan={dataPenambahan} />
    </Fragment>
  );
};

export default Indonesia;
