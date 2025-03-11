import React from "react";
import { useNavigate } from "react-router-dom";

export const PageHome = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage:
          'url("https://th.bing.com/th/id/R.a0720f3d5b937cd9511cca7bcad66b3c?rik=1fK0QpW50eH3Wg&pid=ImgRaw&r=0")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "24px",
        textAlign: "center",
        gap: "20px",
      }}
    >
      <h1>Bienvenido a la mejor página de recetas</h1>
      <h3>Aquí encontrarás lo que buscas</h3>
      <button
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          backgroundColor: "#e9684c",
          color: "white",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          transition: "0.3s",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => navigate("/homesub")}
      >
        Recetas
      </button>
    </div>
  );
};
