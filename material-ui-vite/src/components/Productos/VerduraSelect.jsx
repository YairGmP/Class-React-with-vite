import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function VerduraSelect() {
  const [selectedVerdura, setSelectedVerdura] = React.useState("");

  const verduras = [
    { id: "1", nombre: "Lechuga", descripcion: "Verdura romanita 100% mexicana", precio: 23, Cantidad: 12 },
    { id: "2", nombre: "Tomate", descripcion: "Verdura romanita 100% mexicana", precio: 34, Cantidad: 10 },
    { id: "3", nombre: "Papa", descripcion: "Verdura romanita 100% mexicana", precio: 13, Cantidad: 2 },
    { id: "4", nombre: "Zanahoria", descripcion: "Verdura romanita 100% mexicana", precio: 10, Cantidad: 5 },
    { id: "5", nombre: "Cebolla", descripcion: "Verdura romanita 100% mexicana", precio: 36, Cantidad: 1 },
    { id: "6", nombre: "Espinaca", descripcion: "Verdura romanita 100% mexicana", precio: 19, Cantidad: 200 },
  ];

  const handleChange = (event) => {
    setSelectedVerdura(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="verdura-select-label">Selecciona una verdura</InputLabel>
        <Select
          labelId="verdura-select-label"
          id="verdura-select"
          value={selectedVerdura}
          onChange={handleChange}
        >
          {verduras.map((verdura) => (
            <MenuItem key={verdura.id} value={verdura.id}>
              {verdura.nombre} - ${verdura.precio}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedVerdura && (
        <p>
          Has seleccionado:{" "}
          {verduras.find((verdura) => verdura.id === selectedVerdura)?.nombre}
        </p>
      )}
    </Box>
  );
}
