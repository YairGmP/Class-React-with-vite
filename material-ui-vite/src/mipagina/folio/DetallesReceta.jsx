import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Paper,
  Typography,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";

export default function DetallesReceta() {
  const { id } = useParams(); // Obtén el ID de la receta desde la URL
  const [meal, setMeal] = useState(null); // Estado para los detalles de la receta

  // Función para obtener los detalles de la receta por ID
  useEffect(() => {
    const obtenerDetallesReceta = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const result = await response.json();
        if (result.meals && result.meals.length > 0) {
          setMeal(result.meals[0]); // Actualiza los detalles de la receta
        }
      } catch (error) {
        console.error("Error al obtener los detalles de la receta:", error);
      }
    };

    obtenerDetallesReceta();
  }, [id]);

  if (!meal) {
    return <Typography>Cargando...</Typography>;
  }

  return (
    <div>
      <Paper sx={{ padding: 2, margin: 2, borderRadius: "10px" }}>
        {/* Título de la receta */}
        <Typography variant="h2" sx={{ textAlign: "center", marginBottom: 2, fontWeight: "bold" }}>
          {meal.strMeal}
        </Typography>

        {/* Imagen de la receta (más pequeña) */}
        <CardMedia
          component="img"
          height="300" // Reducir la altura de la imagen
          image={meal.strMealThumb}
          alt={meal.strMeal}
          sx={{ borderRadius: "30px", margin: "0 auto", width: "50%" }} // Ajustar el tamaño
        />

        <CardContent>
          {/* Información de categoría, origen e ID */}
          <Typography variant="body1" sx={{ marginBottom: 2, textAlign: "center", fontSize: "20px" }}>
            <strong>Categoría:</strong> {meal.strCategory} |{" "}
            <strong>Origen:</strong> {meal.strArea} |{" "}
            <strong>ID:</strong> {meal.idMeal}
          </Typography>

          {/* Sección de dos columnas: Ingredientes y Instrucciones */}
          <Grid container spacing={4} sx={{ marginTop: 3 }}>
            {/* Columna de Ingredientes */}
            <Grid item xs={6} md={3}>
              <Typography variant="h5" sx={{ textAlign: "left", marginBottom: 2, fontWeight: "bold" }}>
                Ingredientes
              </Typography>
              <ul style={{ listStyle: "none", padding: 0, fontSize: "18px" }}>
                {Array.from({ length: 20 }).map((_, i) => {
                  const ingrediente = meal[`strIngredient${i + 1}`];
                  const medida = meal[`strMeasure${i + 1}`];
                  return ingrediente ? (
                    <li key={i} style={{ marginBottom: "8px" }}>
                      {medida} {ingrediente}
                    </li>
                  ) : null;
                })}
              </ul>
            </Grid>

            {/* Columna de Instrucciones */}
            <Grid item xs={18} md={8}>
              <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2, fontWeight: "bold" }}>
                Cómo preparar
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: "justify", whiteSpace: "pre-line", fontSize: "18px" }}
              >
                {meal.strInstructions}
              </Typography>
            </Grid>
          </Grid>

          {/* Botón para ver la receta en YouTube */}
          {meal.strYoutube && (
            <Button
              variant="contained"
              color="secondary"
              href={meal.strYoutube}
              target="_blank"
              sx={{ marginTop: "15px", width: "100%", fontSize: "18px" }}
            >
              📽️ Ver Receta en YouTube
            </Button>
          )}
        </CardContent>
      </Paper>
    </div>
  );
}