import React, { useEffect, useState, Fragment } from 'react';
import { withStyles, makeStyles,  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';

import { getIndonesiaProvinsi } from '../../api';
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
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const Provinsi = () => {
  const classes = useStyles();
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  if (!dataProvinsi.length) {
    return <Loading />
  }

  return (
    <Fragment>
      <h2 style={{ textAlign: "center" }}>Data Provinsi</h2>
      <Paper className={classes.root}>
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
                      {row.kasus}
                    </TableCell>
                    <TableCell align="right">
                      {row.dirawat}
                    </TableCell>
                    <TableCell align="right">
                      {row.sembuh}
                    </TableCell>
                    <TableCell align="right">
                      {row.meninggal}
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
    </Fragment>
  );
};

export default Provinsi;
