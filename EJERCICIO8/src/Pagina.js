import React, { useContext, useState } from "react";
import Profesora from "./Profesora";
import Ubicacion from "./Ubicacion";
import Contexto1 from "./contexto/contexto1";
function Pagina() {
  const { alumno } = useContext(Contexto1);
  const idioma = alumno[3].idioma;
  const [ocultar1, setOcultar1] = useState(false);
  const [ocultar2, setOcultar2] = useState(false);

  const mostrar1 = () => {
    setOcultar1(!ocultar1);
  };
  const mostrar2 = () => {
    setOcultar2(!ocultar2);
  };
  return (
    <>
      <h1>{alumno[idioma].titulo}</h1>
      <h2>{alumno[idioma].texto}</h2>
      <div className="botones">
        <button onClick={mostrar1}>{alumno[idioma].boton1}</button>
        <button onClick={mostrar2}>{alumno[idioma].boton2}</button>
      </div>
      {ocultar1 ? <Profesora /> : null}
      {ocultar2 ? <Ubicacion /> : null}
    </>
  );
}

export default Pagina;
