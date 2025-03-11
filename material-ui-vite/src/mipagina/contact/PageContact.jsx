import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import "./PageContact.css"; // Importa el archivo CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("¡Mensaje enviado con éxito!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        {/* Formulario de contacto */}
        <div className="contact-form">
          <Typography variant="h4" className="contact-title" color="#1976d2">
            Contáctanos
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="contact-field">
              <TextField
                fullWidth
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact-field">
              <TextField
                fullWidth
                label="Correo Electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact-field">
              <TextField
                fullWidth
                label="Teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="contact-field">
              <TextField
                fullWidth
                label="Asunto"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="contact-field">
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" variant="contained" className="contact-button">
              Enviar
            </Button>
          </form>
          {successMessage && (
            <Typography className="success-message">{successMessage}</Typography>
          )}
        </div>

        {/* Sección del mapa */}
        <div className="contact-map">
          <Typography variant="h4" className="map-title">
            Dónde encontrarnos
          </Typography>
          <iframe
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.648889941562!2d-87.06636422441217!3d20.683858780880666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e2a14f13ba35%3A0x25d0481d668fb996!2sUniversidad%20Tecnol%C3%B3gica%20de%20la%20Riviera%20Maya%20-%20BIS!5e0!3m2!1ses-419!2smx!4v1741355147487!5m2!1ses-419!2smx"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;