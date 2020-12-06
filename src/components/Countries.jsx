import React, { useEffect, useState, Fragment } from 'react';
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
        <p>
          Confirmed: {formatNumber(confirmed.value)}<br />
          Recovered: {formatNumber(recovered.value)}<br />
          Deaths: {formatNumber(deaths.value)}<br />
          Last Update: {lastUpdate}<br />
        </p>
      );
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <h1>Country Data</h1>
      <Autocomplete
        id="country-list"
        style={{ width: 300 }}
        options={countryList}
        renderInput={(params) => <TextField {...params} label="Choose a country" variant="outlined" />}
        onChange={(_e, value) => handleCountryChange(value)}
        autoHighlight
      />
      <h2>Selected country : {selectedCountry}</h2>
      <DisplayCountryData />
    </Fragment>
  );
};

export default Countries;
