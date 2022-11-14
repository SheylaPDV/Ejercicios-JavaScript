import React, { useContext } from "react";
import "./App.css";
import Contexto1 from "./contexto/contexto1";
import imagenMarta from "./images/marta.PNG";

function Profesora() {
  const { alumno } = useContext(Contexto1);
  const idioma = alumno[3].idioma;
  const imagen = `./images/${alumno[idioma].foto}`;
  return (
    <div className="profesora">
      <h1>{alumno[idioma].boton1}</h1>
      <div>
        <img alt="" className="imagen" src={imagen} />
      </div>
      <div className="nombre">{alumno[idioma].nombre}</div>
    </div>
  );
}

export default Profesora;
