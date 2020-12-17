import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import Moment from 'react-moment';
import CountUp from 'react-countup';

import { getData } from '../api';
import Loading from './Loading';

const Global = () => {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { confirmed, recovered, deaths, lastUpdate } = await getData();
      setConfirmed(confirmed);
      setRecovered(recovered);
      setDeaths(deaths);
      setLastUpdate(lastUpdate);
    };

    fetchData();
  }, []);

  if (!confirmed || !recovered || !deaths || !lastUpdate) {
    return <Loading />
  }

  return (
    <div className="Root">
      <Typography variant="h4" gutterBottom>Global Data</Typography>
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
          <Card className="Card">
            <CardContent className="Confirmed-Card">
              <Typography color="textSecondary" gutterBottom>
                Confirmed
              </Typography>
              <Typography variant="h6">
                <CountUp start={0} end={confirmed.value} duration={1} separator="." />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card className="Card">
            <CardContent className="Recovered-Card">
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h6">
                <CountUp start={0} end={recovered.value} duration={1} separator="." />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card className="Card">
            <CardContent className="Deaths-Card">
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h6">
                <CountUp start={0} end={deaths.value} duration={1} separator="." />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="body2" gutterBottom>
        Last Update: <Moment date={lastUpdate} format="DD MMMM YYYY HH:mm" />
      </Typography>
    </div>
  );
};

export default Global;
