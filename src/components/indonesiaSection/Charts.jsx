import React, { useEffect, useState, Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

import { getIndonesiaHarian } from '../../api';
import Loading from '../Loading';

export const DailyData = () => {
  const [dataHarian, setDataHarian] = useState([]);

  useEffect(() => {
    const fetchDailyData = async () => {
      setDataHarian(await getIndonesiaHarian());
    };

    fetchDailyData();
  }, []);

  if (!dataHarian.length) {
    return <Loading />
  }

  const data = {
    labels: dataHarian.map((data) => moment(data.tanggal).format('YYYY/MM/DD')),
    datasets: [
      {
        label: 'Positif',
        data: dataHarian.map((data) => data.positif),
        fill: true,
        borderColor: '#FFA500'
      },
      {
        label: 'Sembuh',
        data: dataHarian.map((data) => data.sembuh),
        fill: true,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        borderColor: '#008000'
      },
      {
        label: 'Meninggal',
        data: dataHarian.map((data) => data.meninggal),
        fill: true,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderColor: '#FF0000'
      }
    ]
  };

  return (
    <Fragment>
        <h2 style={{ textAlign: "center" }}>Grafik</h2>
        <Line data={data} />
    </Fragment>
  );
};
