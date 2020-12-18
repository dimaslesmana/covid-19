import React, { useEffect, useState, Fragment } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import moment from 'moment';
import { TextField, Grid } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

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

export const ProvinsiChart = ({ dataProvinsi }) => {
  const [selectedProvinsi, setSelectedProvinsi] = useState({});

  const handleProvinsiChange = (provinsi) => {
    if (provinsi) {
      setSelectedProvinsi(dataProvinsi.find((item) => item.provinsi === provinsi));
    } else {
      setSelectedProvinsi({});
    }
  };

  const data = {
    labels: ['Dalam Perawatan', 'Sembuh', 'Meninggal'],
    datasets: [
      {
        label: 'Jumlah',
        backgroundColor: ['rgba(255, 165, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
        data: [selectedProvinsi.dirawat, selectedProvinsi.sembuh, selectedProvinsi.meninggal]
      }
    ]
  };

  const options = {
    legend: { display: false },
    title: { display: true, text: `Total Kasus: ${selectedProvinsi.kasus}` }
  };

  return (
    <Fragment>
      <Grid container justify="center">
        <Grid item>
          <Autocomplete
            id="provinsi-list"
            style={{ width: 300 }}
            options={dataProvinsi.map((item) => item.provinsi)}
            renderInput={(params) => <TextField {...params} label="Pilih Provinsi" variant="outlined" />}
            onChange={(_e, value) => handleProvinsiChange(value)}
            autoHighlight
          />
        </Grid>
      </Grid>
      {selectedProvinsi.provinsi ? <Bar data={data} options={options} /> : null}
    </Fragment>
  );
};
