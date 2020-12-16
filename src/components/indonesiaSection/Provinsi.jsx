import React, { useEffect, useState, Fragment } from 'react';

import { getIndonesiaProvinsi } from '../../api';
import Loading from '../Loading';

const Provinsi = () => {
  const [dataProvinsi, setDataProvinsi] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDataProvinsi(await getIndonesiaProvinsi());
    };

    fetchAPI();
  }, []);

  if (!dataProvinsi.length) {
    return <Loading />
  }

  return (
    <Fragment>
      <h2 style={{ textAlign: "center" }}>Data Provinsi</h2>
      <p>{dataProvinsi.map((data) => data.provinsi)}</p>
    </Fragment>
  );
};

export default Provinsi;
