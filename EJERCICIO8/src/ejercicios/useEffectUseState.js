// import { useEffect, useState } from "react";
// import "./App.css";
// // import Reyes from "./Reyes";

// function App() {
//   const [chiste, setChiste] = useState([]);
//   const otro = () => {
//     const url = "https://api.icndb.com/jokes/";
//     const peticion = fetch(url);

//     peticion
//       .then((datos) => datos.json())
//       .then((lectura) =>
//         lectura.value.map((chistes) =>
//           setChiste((e) => [
//             ...e,
//             <div className="chiste2" key={chistes.id}>
//               {chistes.id}
//               {chistes.joke}
//             </div>,
//           ])
//         )
//       )
//       .catch(() => console.log("error"));
//   };

//   useEffect(() => {
//     otro();
//   }, []);

//   return (
//     <>
//       <h1>Chistes</h1>

//       {chiste}
//     </>
//   );
// }

// export default App;
