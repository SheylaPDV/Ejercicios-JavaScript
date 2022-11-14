import "./App.css";
import Idiomas from "./Idiomas";
import Provider from "./contexto/Provider";
import Pagina from "./Pagina";

function App() {
  return (
    <Provider>
      <div className="banderas">
        <Idiomas />
      </div>
      <div className="contenido">
        <Pagina />
      </div>
    </Provider>
  );
}

export default App;
