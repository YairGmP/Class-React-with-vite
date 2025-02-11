import React from "react";
import Button from "@mui/material/Button";

export default function ListaVerduras() {
  const verduras = [
    {
      id: "1",
      nombre: "Lechuga",
      descripcion: "Verdura romanita 100% mexicano",
      precio: 23,
      Cantidad: 12,
    },
    {
      id: "2",
      nombre: "Tomate",
      descripcion: "Verdura romanita 100% mexicano",
      precio: 34,
      Cantidad: 10,
    },
    {
      id: "3",
      nombre: "Papa",
      descripcion: "Verdura romanita 100% mexicano",
      precio: 13,
      Cantidad: 2,
    },
    {
      id: "4",
      nombre: "Zanahoria",
      descripcion: "Verdura romanita 100% mexicano",
      precio: 10,
      Cantidad: 5,
    },
    {
      id: "5",
      nombre: "Cebolla",
      descripcion: "Verdura romanita 100% mexicano",
      precio: 36,
      Cantidad: 1,
    },
    {
      id: "6",
      nombre: "Espinaca",
      descripcion: "Verdura romanita 100% mexicano",
      precio: 19,
      Cantidad: 200,
    },
  ];

  console.log("Objeto verdura", verduras);
  console.log("Total de datos array es: ", verduras.length);

  return (
    <div>
      <h2>Hola, soy el componente Lista de Verduras</h2>
      {verduras.length > 0 ? (
        verduras.map((verdura, index) => (
          <div key={index}>
            <ul>
              <li>
                {verdura.id} | {verdura.nombre} | {verdura.descripcion} | $
                {verdura.precio}  <Button onClick={()=>alert(`El stock es de: ${verdura.Cantidad}`)} variant="contained" color="primary">Ver stock</Button>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <p>No hay datos disponibles.</p> 
      )}
    </div>
  );
}
