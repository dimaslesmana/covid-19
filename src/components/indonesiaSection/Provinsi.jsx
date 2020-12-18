import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tabs, Tab, Typography } from '@material-ui/core';

import { getIndonesiaProvinsi } from '../../api';
import { formatNumber }  from '../../formatNumber';
import { ProvinsiChart } from './Charts';
import Loading from '../Loading';

const columns = [
  { id: 'name', label: 'Provinsi', minWidth: 170 },
  {
    id: 'cases',
    label: 'Total Kasus',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'treated',
    label: 'Dalam Perawatan',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'recovered',
    label: 'Sembuh',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'deaths',
    label: 'Meninggal',
    minWidth: 170,
    align: 'right'
  }
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  }
}))(TableCell);

const useStyles = makeStyles({
  TableRoot: {
    width: '100%'
  },
  TabsRoot: {
    flexGrow: 1
  },
  container: {
    maxHeight: 440
  },
});

const Provinsi = () => {
  const classes = useStyles();
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchAPI = async () => {
      setDataProvinsi(await getIndonesiaProvinsi());
    };

    fetchAPI();
  }, []);

  const handleChangePage = (_e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  if (!dataProvinsi.length) {
    return <Loading />
  }

  const DisplayTable = () => {
    return (
      <Paper className={classes.TableRoot}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    <strong>{column.label}</strong>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataProvinsi.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.provinsi}>
                    <TableCell>
                      {row.provinsi}
                    </TableCell>
                    <TableCell align="right">
                      {formatNumber(row.kasus)}
                    </TableCell>
                    <TableCell align="right">
                      {formatNumber(row.dirawat)}
                    </TableCell>
                    <TableCell align="right">
                      {formatNumber(row.sembuh)}
                    </TableCell>
                    <TableCell align="right">
                      {formatNumber(row.meninggal)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { value: -1, label: 'All' }]}
          component="div"
          count={dataProvinsi.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    );
  };

  const TabPanel = ({ children, value, index, ...other }) => {
    return (
      <div role="tabpanel" hidden={value !== index} id={`provinsi-tabpanel-${index}`}aria-labelledby={`provinsi-tab-${index}`}{...other}>
        {value === index && (
          <Box p={2}>
            {children}
          </Box>
        )}
      </div>
    );
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const a11yProps = (index) => {
    return {
      id: `provinsi-tab-${index}`,
      'aria-controls': `provinsi-tabpanel-${index}`
    };
  };

  return (
    <div className="Root">
      <Typography variant="h4" gutterBottom>Data Provinsi</Typography>
      <Paper className={classes.TabsRoot}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="inherit" centered>
          <Tab label="Lihat Table" {...a11yProps(0)} />
          <Tab label="Lihat Chart" {...a11yProps(1)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <DisplayTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProvinsiChart dataProvinsi={dataProvinsi} />
      </TabPanel>
    </div>
  );
};

export default Provinsi;
