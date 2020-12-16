import React, { useEffect, useState, Fragment } from 'react';
import Moment from 'react-moment';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { getData, getCountryList } from '../api';
import { formatNumber } from '../formatNumber';

const Countries = () => {
  const [countryList, setCountryList] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('-');

  useEffect(() => {
    const fetchCountryList = async () => {
      setCountryList(await getCountryList());
    }

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
        <p style={{textAlign: "center"}}>
          Confirmed: {formatNumber(confirmed.value)}<br />
          Recovered: {formatNumber(recovered.value)}<br />
          Deaths: {formatNumber(deaths.value)}<br />
          Last Update: <Moment date={lastUpdate} format="DD MMMM YYYY HH:mm" /><br />
        </p>
      );
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <h1 style={{textAlign: "center"}}>Country Data</h1>
      <Autocomplete
        id="country-list"
        style={{ width: 300 }}
        options={countryList}
        renderInput={(params) => <TextField {...params} label="Choose a country" variant="outlined" />}
        onChange={(_e, value) => handleCountryChange(value)}
        autoHighlight
      />
      <h2 style={{textAlign: "center"}}>Selected country : {selectedCountry}</h2>
      <DisplayCountryData />
    </Fragment>
  );
};

export default Countries;
