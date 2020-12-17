import React, { useEffect, useState, Fragment } from 'react';
import Moment from 'react-moment';
import CountUp from 'react-countup';
import { TextField, Typography, Grid, Card, CardContent } from '@material-ui/core';
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
        /* <p style={{ textAlign: "center" }}>
          Confirmed: <CountUp start={0} end={confirmed.value} duration={1} separator="." /><br />
          Recovered: <CountUp start={0} end={recovered.value} duration={1} separator="." /><br />
          Deaths: <CountUp start={0} end={deaths.value} duration={1} separator="." /><br />
          Last Update: <Moment date={lastUpdate} format="DD MMMM YYYY HH:mm" /><br />
        </p> */
        <Fragment>
          <Grid container spacing={2}>
            <Grid item sm={4} xs={12}>
              <Card className="Card">
                <CardContent className="Confirmed-Card">
                  <Typography color="textSecondary" gutterBottom>
                    Confirmed:
                  </Typography>
                  <Typography>
                    <CountUp start={0} end={confirmed.value} duration={1} separator="." />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Card className="Card">
                <CardContent className="Recovered-Card">
                  <Typography color="textSecondary" gutterBottom>
                    Recovered:
                  </Typography>
                  <Typography>
                  <CountUp start={0} end={recovered.value} duration={1} separator="." />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Card className="Card">
                <CardContent className="Deaths-Card">
                  <Typography color="textSecondary" gutterBottom>
                    Deaths:
                  </Typography>
                  <Typography>
                    <CountUp start={0} end={deaths.value} duration={1} separator="." />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Typography variant="body2" gutterBottom>
            Last Update: <Moment date={lastUpdate} format="DD MMMM YYYY HH:mm" />
          </Typography>
        </Fragment>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="Root">
      <Typography variant="h4" gutterBottom>Country Data</Typography>
      <Grid container justify="center">
        <Grid item>
          <Autocomplete
            id="country-list"
            style={{ width: 300 }}
            options={countryList}
            renderInput={(params) => <TextField {...params} label="Choose a country" variant="outlined" />}
            onChange={(_e, value) => handleCountryChange(value)}
            autoHighlight
          />
        </Grid>
      </Grid>
      <Typography variant="body1" gutterBottom>Selected country : {selectedCountry}</Typography>
      <DisplayCountryData />
    </div>
  );
};

export default Countries;
