import React, { useContext } from "react";
import francia from "./images/francia.png";
import uk from "./images/uk.png";
import spain from "./images/spain.jpg";
import Contexto1 from "./contexto/contexto1";
function Idiomas() {
  const { setAlumno } = useContext(Contexto1);
  const { alumno } = useContext(Contexto1);
  const cambio1 = () => {
    setAlumno(
      alumno.map((datos, indice) =>
        indice == 3 ? { ...datos, idioma: 0 } : { ...datos }
      )
    );
  };
  return (
    <div className="idiomas">
      <div className="bandera" onClick={cambio1}>
        <img src={francia} />
      </div>
      <div className="bandera">
        <img src={spain} />
      </div>
      <div className="bandera">
        <img src={uk} />
      </div>
    </div>
  );
}

export default Idiomas;
