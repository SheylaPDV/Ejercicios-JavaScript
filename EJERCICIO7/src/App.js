import './miCss.css';

import imagen0 from './levantamiento-de-pesas.png';
import imagen1 from './ares.png';
import imagen2 from './demeter.png';

function App() {
  let nombre = ['Sheyla', 'gilda', 'Aura'];

  return (
    <div className="fondo">
      <div className="div">
        <img className="img" src={imagen0} />
        <h1 className="img">{nombre[0]}</h1>
      </div>
      <div className="div">
        <img className="img" src={imagen1} />
        <h1 className="img">{nombre[1]}</h1>
      </div>
      <div className="div">
        <img className="img" src={imagen2} />
        <h1 className="img"> {nombre[2]}</h1>
      </div>
    </div>
  );
}

export default App;

//Codigo jsx, mezcla js con html
//se recomienda introducir en index.css los selectores que influyen en el proyecto general
//para introductir valores de variables en jsx, meter en una etiqueta llaves {} y dentro el nombre de la variable
//Para meter variable dentro de un input es con la propiedad "value"
//para acceder a un elemento de un array: {nombre[1]}
//para acceder a un valor de un objeto:: {nombre.edad}
//Para acceder a un valor de un objeto dentro de un array: {nombre[1].edad}
