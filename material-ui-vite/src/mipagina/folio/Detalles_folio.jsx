import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function Detalles_folio() {
  const [searchText, setSearchText] = useState(""); // Estado para el texto de búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para los resultados de búsqueda
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate(); // Hook para navegar a la subpágina

  // Función para buscar recetas por ID o nombre
  const buscarRecetas = async () => {
    if (searchText.trim() === "") {
      alert("Por favor, ingresa un término de búsqueda.");
      return;
    }

    setLoading(true); // Activar estado de carga
    setError(null); // Limpiar errores anteriores

    try {
      let url;
      if (!isNaN(searchText)) {
        // Si es un número, busca por ID
        url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchText}`;
      } else {
        // Si es texto, busca por nombre
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
      }

      const response = await fetch(url);
      const result = await response.json();
      if (result.meals) {
        setSearchResults(result.meals); // Actualizar resultados
      } else {
        setSearchResults([]); // No hay resultados
      }
    } catch (error) {
      console.error("Error al buscar recetas:", error);
      setError("Ocurrió un error al buscar recetas."); // Mostrar mensaje de error
    } finally {
      setLoading(false); // Desactivar estado de carga
    }
  };

  // Cargar recetas por defecto al inicio
  useEffect(() => {
    const cargarRecetasPorDefecto = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=beef`
        );
        const result = await response.json();
        if (result.meals) {
          setSearchResults(result.meals); // Mostrar recetas por defecto
        }
      } catch (error) {
        console.error("Error al cargar recetas por defecto:", error);
      }
    };

    cargarRecetasPorDefecto();
  }, []);

  // Función para navegar a la página de detalles de la receta
  const verDetalles = (id) => {
    navigate(`/homesub/${id}`); // Navegar a la ruta de detalles
  };

  return (
    <div>
      {/* Buscador */}
      <Grid container padding={4} justifyContent="center" alignItems="center">
        <Grid item xs={8} md={6}>
          <TextField
            fullWidth
            label="Buscar receta por ID o nombre"
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Grid>
        <Grid item xs={4} md={2} paddingLeft={2}>
          <Button
            variant="contained"
            onClick={buscarRecetas}
            style={{ height: "56px", width: "100%" }}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>

      {/* Mostrar resultados de búsqueda (tarjetas) */}
      {loading ? (
        <Typography sx={{ textAlign: "center", marginTop: 4 }}>
          Cargando...
        </Typography>
      ) : error ? (
        <Typography sx={{ textAlign: "center", marginTop: 4, color: "red" }}>
          {error}
        </Typography>
      ) : searchResults.length > 0 ? (
        <Grid container spacing={2} padding={4}>
          {searchResults.map((receta) => (
            <Grid item xs={12} sm={6} md={4} key={receta.idMeal}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={receta.strMealThumb}
                  alt={receta.strMeal}                    
                  sx={{ borderRadius: "10px" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {receta.strMeal}
                  </Typography>

                  {/* Mostrar ID, categoría y origen */}
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ textAlign: "center", marginBottom: "10px" }}
                  >
                    <strong>ID:</strong> {receta.idMeal} |{" "}
                    <strong>Categoría:</strong> {receta.strCategory} |{" "}
                    <strong>Origen:</strong> {receta.strArea}
                  </Typography>

                  {/* Botón "Ver más detalles" */}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => verDetalles(receta.idMeal)}
                    sx={{ width: "100%" }}
                  >
                    Ver más detalles
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography sx={{ textAlign: "center", marginTop: 4 }}>
          No se encontraron recetas.
        </Typography>
      )}
    </div>
  );
}
