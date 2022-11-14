import "./App.css";
import Componente from "./Componente";
import "./Componente.css";
import { useState } from "react";

function App() {
  const productos = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178,
    },
    {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169,
    },
    {
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81,
    },
    {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126,
    },
  ];
  const [total, setTotal] = useState(0);

  return (
    <>
      <h2>Total a pagar:{total}€</h2>
      <div className="caja-central">
        <Componente
          nombre={productos[0].nombre}
          color={productos[0].color}
          precio={productos[0].precio}
          setTotal={setTotal}
        />
        <Componente
          nombre={productos[1].nombre}
          color={productos[1].color}
          precio={productos[1].precio}
          setTotal={setTotal}
        />
        <Componente
          nombre={productos[2].nombre}
          color={productos[2].color}
          precio={productos[2].precio}
          setTotal={setTotal}
        />
        <Componente
          nombre={productos[3].nombre}
          color={productos[3].color}
          precio={productos[3].precio}
          setTotal={setTotal}
        />
      </div>
    </>
  );
}

export default App;
