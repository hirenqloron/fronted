import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    fontFamily:'Public Sans',
    fontSize: 14,
    color: '#6D6976',
    fontWeight:600,
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily:'Public Sans',
    fontSize: 12,
    color: '#6D6976',
    fontWeight:500,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('New for you', " ", " ", " ", " "),
  createData('Account Activity', " ", " ", " ", " "),
  createData('A new browser used to sign in', " ", " ", " ", " "),
  createData('A new device is linked', " ", " ", " ", " "),
];

export default function CustomizedTables() {
  return (
    <TableContainer sx={{ border:'0.8px solid #C9C9C9' ,borderRadius:"13px"}} component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TYPE </StyledTableCell>
            <StyledTableCell align="right">TYPE</StyledTableCell>
            <StyledTableCell align="right">TYPE</StyledTableCell>
            <StyledTableCell align="right">TYPE</StyledTableCell>
            <StyledTableCell align="right">TYPE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
