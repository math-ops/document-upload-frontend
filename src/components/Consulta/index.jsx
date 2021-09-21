import React from 'react'
import './consulta.css'
import { Title, Form, Label, Input, Button } from './consulta.js'

//materialUI components
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

//Estilização das Células
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#009add',
    color: theme.palette.common.white,
    fontSize: 16,
      fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    background: '#fff',
  },
}))(TableCell);


//Estilização da Tabela
const columns = [
  { id: 'customer', label: 'Customer', minWidth: 170 },
  { id: 'customer_name', label: 'Customer Name', minWidth: 270 },
  { id: 'ssd_dt', label: 'SSD Date', minWidth: 250 },
  { id: 'pdd', label: 'Planned Delivery Date', minWidth: 250 },
  { id: 'sales_order', label: 'Sales Order', minWidth: 250 },
  { id: 'part_number', label: 'Part Number', minWidth: 250 },
  { id: 'description', label: 'Description', minWidth: 250 },
  { id: 'quantity', label: 'Quantity', minWidth: 250 },
  { id: 'unit_price', label: 'Unit Price', minWidth: 250 },
  { id: 'delivery_qtd', label: 'Delivery QTD', minWidth: 250 },
  { id: 'pending_qtd', label: 'Pending QTD', minWidth: 250 },
  { id: 'customer_po', label: 'Customer PO', minWidth: 250 },
  { id: 'customer_po_line', label: 'Customer PO Line', minWidth: 250 },
  { id: 'fiscal_ref', label: 'Fiscal Ref', minWidth: 250 },
  { id: 'invoice_to_customer', label: 'Invoice to Customer', minWidth: 250 },
  { id: 'series', label: 'Séries', minWidth: 250 },
  { id: 'invoice_status', label: 'Invoice Status', minWidth: 250 },
  { id: 'invoice_dt', label: 'Invoice Date', minWidth: 250 },
  { id: 'customer_po_nf', label: 'Customer PO NF', minWidth: 250 },
  { id: 'customer_po_nf_line', label: 'Customer PO NF Line', minWidth: 250 },
  { id: 'chave_acesso', label: 'Chave de Acesso', minWidth: 250 },
  { id: 'controle', label: 'Controle', minWidth: 250 },
  { id: 'dt_nf_impressa', label: 'Data/Hora NF Impressa', minWidth: 250 },
  
];

//Definição Itens Tabela
function createData(customer, customer_name, ssd_dt, pdd, sales_order, part_number, description, quantity, unit_price, delivery_qtd, pending_qtd, customer_po, customer_po_line, fiscal_ref, invoice_to_customer, series, invoice_status, invoice_dt, customer_po_nf, customer_po_nf_line, chave_acesso, controle, dt_nf_impressa) {
  return { customer, customer_name, ssd_dt, pdd, sales_order, part_number, description, quantity, unit_price, delivery_qtd, pending_qtd, customer_po, customer_po_line, fiscal_ref, invoice_to_customer, series, invoice_status, invoice_dt, customer_po_nf, customer_po_nf_line, chave_acesso, controle, dt_nf_impressa  };
}

//Preenchendo a tabela com informações ficticias
const rows = [
  createData('L38010', 'Flextronics International Tec LTDA', '15/09/2021', '17/09/2021', 20002333, 'MOT-SB28D19095', 'ASSEMBLY,BOARD KIT,CAPRIPLUS', 2340, 399.6854, 2340, 0, '', '', 36794, 596121, 1, 'Transmitida', '15/09/2021', '', '', 13210904454120000110550010005961211365467255, '', '2021-09-15 10:39:07' ),
  createData('L38010', 'Flextronics International Tec LTDA', '15/09/2021', '17/09/2021', 20002333, 'MOT-SB28D19095', 'ASSEMBLY,BOARD KIT,CAPRIPLUS', 2340, 399.6854, 2340, 0, '', '', 36794, 596121, 1, 'Transmitida', '15/09/2021', '', '', 13210904454120000110550010005961211365467255, '', '2021-09-15 10:39:07' ),
  createData('L38010', 'Flextronics International Tec LTDA', '15/09/2021', '17/09/2021', 20002333, 'MOT-SB28D19095', 'ASSEMBLY,BOARD KIT,CAPRIPLUS', 2340, 399.6854, 2340, 0, '', '', 36794, 596121, 1, 'Transmitida', '15/09/2021', '', '', 13210904454120000110550010005961211365467255, '', '2021-09-15 10:39:07' ),
  createData('L38010', 'Flextronics International Tec LTDA', '15/09/2021', '17/09/2021', 20002333, 'MOT-SB28D19095', 'ASSEMBLY,BOARD KIT,CAPRIPLUS', 2340, 399.6854, 2340, 0, '', '', 36794, 596121, 1, 'Transmitida', '15/09/2021', '', '', 13210904454120000110550010005961211365467255, '', '2021-09-15 10:39:07' ),
  createData('L38010', 'Flextronics International Tec LTDA', '15/09/2021', '17/09/2021', 20002333, 'MOT-SB28D19095', 'ASSEMBLY,BOARD KIT,CAPRIPLUS', 2340, 399.6854, 2340, 0, '', '', 36794, 596121, 1, 'Transmitida', '15/09/2021', '', '', 13210904454120000110550010005961211365467255, '', '2021-09-15 10:39:07' ),
  createData('L38010', 'Flextronics International Tec LTDA', '15/09/2021', '17/09/2021', 20002333, 'MOT-SB28D19095', 'ASSEMBLY,BOARD KIT,CAPRIPLUS', 2340, 399.6854, 2340, 0, '', '', 36794, 596121, 1, 'Transmitida', '15/09/2021', '', '', 13210904454120000110550010005961211365467255, '', '2021-09-15 10:39:07' ),
  
];

//Importando a estilização
const useStyles = makeStyles({
  root: {
    width: '95%',
    marginLeft: '30px',
  },
  container: {
    maxHeight: 440,
  },
});

//Criando a tabela
export function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="cons-table">
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </StyledTableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}

export default function Consulta(){
  return(
    <>
    <Title>Consulta de SSD</Title>
    <Form>
      <Label className="di-label">Data Inicial:</Label>
      <Input className="di-input" type="date" />
      <Label className="df-label" >Data Final:</Label>
      <Input className="df-input" type="date" />
      <Button className="cons-button" >Exibir Relatório</Button>
    </Form>

    <StickyHeadTable />  
    </>
  )
}