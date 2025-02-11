import React from "react";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

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
                {verdura.precio}{" "}
                <Button
                  onClick={() => alert(`El stock es de: ${verdura.Cantidad}`)}
                  variant="contained"
                  color="primary"
                >
                  Ver stock
                </Button>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <p>No hay datos disponibles.</p>
      )}

      <Divider color="secondary" />

      {verduras.length > 0 && (
        <div>
          <h3>Vista en tabla</h3>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {verduras.map((verdura, index) => (
                <tr key={index}>
                  <td>{verdura.id}</td>
                  <td>{verdura.nombre}</td>
                  <td>{verdura.descripcion}</td>
                  <td>${verdura.precio}</td>
                  <td>
                    <Button
                      onClick={() =>
                        alert(`El stock es de: ${verdura.Cantidad}`)
                      }
                      variant="contained"
                      color="primary"
                    >
                      Ver stock
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
