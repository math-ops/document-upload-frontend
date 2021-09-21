import React from 'react'
import './documents.css'
import { Title, Form, Label, Input, Button } from './documents.js'

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
  { id: 'partnumber', label: 'Partnumber', minWidth: 170 },
  { id: 'quantidade', label: 'Quantidade', minWidth: 270 },
  { id: 'dt_faturamento', label: 'Data Faturamento', minWidth: 250 },
  { id: 'dt_entrega', label: 'Data Entrega', minWidth: 250 },
  
  
];

//Definição Itens Tabela
function createData(partnumber, quantidade, dt_faturamento, dt_entrega) {
  return { partnumber, quantidade, dt_faturamento, dt_entrega  };
}

//Preenchendo a tabela com informações ficticias
const rows = [
  createData('L38010', 200, '2021-09-15', '2021-09-15'),
  createData('L38010', 200, '2021-09-15', '2021-09-15'),
  createData('L38010', 200, '2021-09-15', '2021-09-15'),
  createData('L38010', 200, '2021-09-15', '2021-09-15'),
  createData('L38010', 200, '2021-09-15', '2021-09-15'),
  createData('L38010', 200, '2021-09-15', '2021-09-15'),
  
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
    <div className="doc-table">
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

export default function Documents(){
  return(
    <>
      <Title>Documents</Title>
      <Form className="doc-form" >
      <Label>Adicione um documento no formato CSV no campo abaixo!</Label>
      <Input type="file" accept="application/pdf"/>
      <Button>Adicionar</Button>
      </Form>

      {/* <Modal>
        <Image />
        <Message>Documento adicionado com sucesso!</Message>
        <Button>OK</Button>
      </Modal> */}
      

      <StickyHeadTable />
    </>
  )
}














