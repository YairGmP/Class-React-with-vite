// import { Typography } from '@mui/material';
import React from 'react'
import { ContenedorAprobado } from './Subtrama/ContenedorAprobado';
import { ConteneddorReprobado } from './Subtrama/ConteneddorReprobado';

export const AlumnoPromedio = () => {

    const materia1 = 6;
    const materia2 = 9;
    const resultado = (materia1 + materia2) / 2;

    if(resultado > 8){
        return(
            <div>
                {/* <Typography variant='h3' color='success'>Aprobado</Typography> */}
                <ContenedorAprobado/>
                <p>Promedio: {resultado}</p>
            </div>
        )

    }else{
        return(
            <div>
                {/* <Typography variant='h3' color='red'>Reprobado</Typography> */}
                <ConteneddorReprobado/>
                <p>Promedio: {resultado}</p>
            </div>
            
        )
    }
    


  return (
    <div>AlumnoPromedio</div>
  )
}
