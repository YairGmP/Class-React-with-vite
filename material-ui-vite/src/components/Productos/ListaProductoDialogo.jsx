import React from "react";
import Grid from "@mui/material/Grid2";
import { Card, Container, Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";
import MiDialogo from "./MiDialogo";

export default function ListaProductoDialogo({ data }) {
  console.log(data);
  return (
    <div>
      <h2>Consumo JASON</h2>

      <Grid container spacing={1}>
        {data.book.map((libro, index) => (
          <Grid size={{ sm: 12, md: 6 }} key={index}>
            <Card variant="outlined" color="success" style={{ padding: 15 }}>
              <Typography variant="h4" color="initial">
                LIBRO
              </Typography>
              <Typography variant="h5" color="initial">
                Titulo: {libro.title}{" "}
              </Typography>
              <Typography variant="h5" color="initial">
                Autor: {libro.author}{" "}
              </Typography>
              <Typography variant="h5" color="initial">
                Categoria: {libro.category}{" "}
              </Typography>
              <MiDialogo data={libro}/>
            </Card>
          </Grid>
        ))}
        <Grid size={{ sm: 12, md: 6 }}>
          <Card variant="outlined" color="success" style={{ padding: 15 }}>
            <Typography variant="h4" color="initial">
              Bicleta en promocion
            </Typography>
            <Typography variant="h5" color="initial">
              Precio mas bajo: {data.bicycle.price}{" "}
            </Typography>
            <Typography variant="h5" color="initial">
              Stock: {data.bicycle.instock ? "Disponible" : "No hay"}{" "}
            </Typography>
            <Typography variant="h5" color="initial">
              Color: {data.bicycle.color}{" "}
            </Typography>
            
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
