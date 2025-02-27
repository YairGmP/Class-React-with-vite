import React, { useState,useEffect } from "react";
import { Card, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import ContenidoComida from './ContenidoComida';
import ContentFood from "./ContentFood";

export default function HomeSub() {

   const [textobuscar, setTextoBuscar] = React.useState('')

   const [datos, setDatos] = React.useState(
      { meals: [] }
   )

   console.log('Contenido input', textobuscar)

   const obtenerComidaPorNombre = async ( ) => {

      const buscar = textobuscar.trim()

      if (textobuscar === '') {
         alert('Campo vacio, pon algo minimo')
      } else {
         const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${buscar}`, requestOptions);
            const result = await response.json();
            setDatos(result)
            console.log(result)
          } catch (error) {
            console.error(error);
          };
            
      }
   }

   React.useEffect(() => {
      const obtenerdata = async () => {
         try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`);
            const result = await response.json();
            setDatos(result)
          } catch (error) {
            console.error(error);
          };
      };
      obtenerdata();
   }, [])
   

   return(
      <div>
         <h1 style={{textAlign: 'center', color: 'blue'}}>Browser</h1>

         <Grid container padding={4} justifyContent="center" alignItems="center">

            <Grid size={{xs: 8, md:6}} >

               <Card variant='outlined'  >
                  <TextField
                  onChange={ e => setTextoBuscar(e.target.value) }
                  id="filled-basic" 
                  label="Escribe el nombre del platillo" 
                  variant="filled"
                  size='small'
                  style={{width: '100%'}}
                  />

                  {/* <input type="text" /> */}
               </Card>

            </Grid>
            
            <Grid size={{xs: 3, md:2}} paddingLeft={2}>

                  <Button
                     onClick={obtenerComidaPorNombre}
                     variant="outlined" 
                     // size="large"
                     style={{height: 50, width: '9em'}}
                  >
                     Buscar
                  </Button>

            </Grid>

         </Grid>
         <ContentFood
            data={datos.meals}
         />
         

      </div>
   )
}