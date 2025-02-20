import React from "react";
import Grid from "@mui/material/Grid2";
import { Button, Card, Paper, TextField } from "@mui/material"; 

export default function HomePage() {
  return (
    <div>
        <br />
        <Grid container spacing={2} padding={4}> 
            <Grid size={{xs:8, md:8}}>
                <Card variant="outlined" >
                    <TextField label='Pon nombre de comida'></TextField>
                </Card>
            </Grid>
            <Grid size={{xs:4, md:4}}>
                <Button variant="contained">Buscar</Button>
            </Grid>
        </Grid>

      <Grid container spacing={2}>
        <Grid size={{ XS: 4, md: 4 }}>
            <Paper style={{padding:12}}>
                Hola mundo 
            </Paper>
        </Grid>
      </Grid>
      
    </div>
  )
}
