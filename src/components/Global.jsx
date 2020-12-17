import React, { useEffect, useState, Fragment } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import Moment from 'react-moment';
import CountUp from 'react-countup';

import { getData } from '../api';
import Loading from './Loading';

const Global = () => {
  const [globalData, setGlobalData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      setGlobalData(await getData());
    };

    fetchData();
  }, []);

  if (!globalData) {
    return <Loading />
  }

  const { confirmed, recovered, deaths, lastUpdate } = globalData;
  return (
    <div className="Root">
      <Typography variant="h4" gutterBottom>Global Data</Typography>
      {/* <p style={{textAlign: "center"}}>
        Confirmed: <CountUp start={0} end={confirmed.value} duration={1} separator="." /><br />
        Recovered: <CountUp start={0} end={recovered.value} duration={1} separator="." /><br />
        Deaths: <CountUp start={0} end={deaths.value} duration={1} separator="." /><br />
        Last Update: <Moment date={lastUpdate} format="DD MMMM YYYY HH:mm" /><br />
      </p> */}
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
    </div>
  );
};

export default Global;
