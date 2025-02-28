// import { Divider } from '@mui/material';
import * as React from 'react';
import ComponenteEncabezado from './components/Subtrama/ComponenteEncabezado';
import { AlumnoPromedio } from './components/AlumnoPromedio';
import ListaProductos from './components/ListaProductos';
import MiProyecto from './components/miproyecto/MiProyecto';
import { Home } from '@mui/icons-material';
import HomePage from './pages/HomePage';
import HomeSub from './pages/HomeSub';
import AppRoutes from './mipagina/home/AppRoutes';


export default function App() {

 

  return (
    <>
    <ComponenteEncabezado/>
    {/* <AlumnoPromedio/>
    {/* <ListaProductos/> */}
    {/* <MiProyecto/> */}
    {/* <HomeSub/>  */}
    <AppRoutes/>
    </>
  );
}
