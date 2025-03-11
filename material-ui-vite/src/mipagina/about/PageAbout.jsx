import React from "react";
import {
  Container,
  Typography,
  Grid2 as Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Link,
  Box,
  Divider,
} from "@mui/material";
import { Email, GitHub } from "@mui/icons-material";
import "./PageAbout.css";

export default function PageAbout() {
  return (
    <Box className="background" >
      <Container>
        {/* Sección de perfil */}
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={4} className="profile-container">
            <Avatar
              src="https://www.mundiario.com/media/cineseries/images/2023/04/23/2023042303562871912.png"
              alt="John Cena"
              sx={{
                width: 150,
                height: 150,
                boxShadow: 5,
                border: "4px solidrgb(219, 111, 10)",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" className="title">
              About us
            </Typography>
            <Typography variant="subtitle1" className="subtitle">
              Soy un entusiasta estudiante de desarrollo en software.
            </Typography>
            <Typography className="description">
              Apasionado por la programación, el desarrollo web y la
              ciberseguridad, con un fuerte interés en explorar y dominar nuevas
              tecnologías. Actualmente, me enfoco en ampliar mis conocimientos
              en áreas como la seguridad informática y el desarrollo de
              software, buscando siempre aprender y crecer en este campo en
              constante evolución. Tengo 24 años y cuento con formación técnica
              en soporte y mantenimiento de equipos de cómputo, lo que me ha
              permitido desarrollar una sólida base en tecnología. Mi objetivo
              es seguir especializándome en ciberseguridad y programación,
              combinando mi pasión por la innovación con la resolución de
              desafíos tecnológicos.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Sección de educación y experiencia */}
        <Typography variant="h5" className="skills-title" gutterBottom>
          Educación:
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Sección de Educación */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" className="description">
              <strong>TSU:</strong> Tecnico Superior Universitario en Desarrollo y Gestion en Software Multiplataforma. 
            </Typography>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Sección de contacto */}
        <Typography variant="h5" className="contact-title" gutterBottom>
          Contáctame
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <IconButton href="mailto:guzmanyair32@gmail.com" color="primary">
              <Email fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="https://github.com/YairGmP"
              target="_blank"
              color="inherit"
            >
              <GitHub fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
