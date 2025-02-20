import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const PropXD = ({ books, bicycle }) => {
  const [mostrarTabla, setMostrarTabla] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const manejarClick = (tipo) => {
    setMostrarTabla(tipo);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>
        ¿Te gustaría ver libros o una bicicleta? <br />
        <Button variant="contained" color="primary" onClick={() => manejarClick("books")}>
          Libros
        </Button>{" "}
        <Button variant="contained" color="inherit" onClick={() => manejarClick("bicycle")}>
          Bicicleta
        </Button>
      </h3>

      <div>
        {mostrarTabla === "books" && (
          <>
            <TextField
              label="Buscar libro"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ marginBottom: "20px" }}
            />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="tabla de libros">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Título</StyledTableCell>
                    <StyledTableCell>Autor</StyledTableCell>
                    <StyledTableCell>Precio</StyledTableCell>
                    <StyledTableCell>Estado</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredBooks.map((book, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell>{book.title}</StyledTableCell>
                      <StyledTableCell>{book.author}</StyledTableCell>
                      <StyledTableCell>${book.price.toFixed(2)}</StyledTableCell>
                      <StyledTableCell>
                        {book.instock && !book.sold ? "Disponible" : "Agotado"}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        {mostrarTabla === "bicycle" && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="tabla de bicicleta">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Color</StyledTableCell>
                  <StyledTableCell>Precio</StyledTableCell>
                  <StyledTableCell>Estado</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>{bicycle.color}</StyledTableCell>
                  <StyledTableCell>${bicycle.price.toFixed(2)}</StyledTableCell>
                  <StyledTableCell>
                    {bicycle.instock && !bicycle.sold ? "Disponible" : "Agotado"}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default PropXD;
