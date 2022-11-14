import React from "react";
import "./App.css";
import "./Componente.css";
// si pongo prop(o cualquier cosa), recoge tdas las propiedades del pàdre, `para llegar a ellas tendria que poner prop.vivo, etc..
// se recomienda destructuring
function Componente({ nombre, precio, color, setTotal }) {
  const ruta = "http://www.html6.es/img/rey_";
  const imagen = `${ruta}${nombre.toLowerCase()}.png`;

  const comprar = (elemento) => {
    // set total que es el total, almacena on click el precio de cada rey
    setTotal((e) => e + precio);
    // Buscamos al padre del padre del padre y busco a que rey he hecho click, y con esto desaparecerá
    elemento.target.parentNode.parentNode.parentNode.style.display = "none";
  };

  return (
    <>
      <div className="comida" style={{ backgroundColor: color }}>
        <h1>{nombre}</h1>
        <img src={imagen} alt="" />
        <div className="titulo">Precio:</div>
        <div className="precio">
          {precio}€
          <div>
            <button onClick={comprar}>Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
}

// Para añadir propiedades por defecto cuando no reciba nada se podria hacer esto:
// Componente.defaultProps = {
//   reses: "pocas",
//   rey: "Rey Godo",
// };

export default Componente;
