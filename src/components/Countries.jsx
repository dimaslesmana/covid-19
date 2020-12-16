import React, { useEffect, useState, Fragment } from 'react';
import Moment from 'react-moment';
import CountUp from 'react-countup';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { getData, getCountryList } from '../api';

const Countries = () => {
  const [countryList, setCountryList] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('-');

  useEffect(() => {
    const fetchCountryList = async () => {
      setCountryList(await getCountryList());
    };

    fetchCountryList();
  }, []);

  const handleCountryChange = async (country) => {
    if (country) {
      setCountryData(await getData(country));
      setSelectedCountry(country);
    } else {
      setSelectedCountry('-');
    }
  };

  const DisplayCountryData = () => {
    if (selectedCountry !== '-') {
      const { confirmed, recovered, deaths, lastUpdate } = countryData;

      return (
        <p style={{ textAlign: "center" }}>
          Confirmed: <CountUp start={0} end={confirmed.value} duration={1} separator="." /><br />
          Recovered: <CountUp start={0} end={recovered.value} duration={1} separator="." /><br />
          Deaths: <CountUp start={0} end={deaths.value} duration={1} separator="." /><br />
          Last Update: <Moment date={lastUpdate} format="DD MMMM YYYY HH:mm" /><br />
        </p>
      );
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Country Data</h1>
      <Autocomplete
        id="country-list"
        style={{ width: 300 }}
        options={countryList}
        renderInput={(params) => <TextField {...params} label="Choose a country" variant="outlined" />}
        onChange={(_e, value) => handleCountryChange(value)}
        autoHighlight
      />
      <h2 style={{ textAlign: "center" }}>Selected country : {selectedCountry}</h2>
      <DisplayCountryData />
    </Fragment>
  );
};

export default Countries;
