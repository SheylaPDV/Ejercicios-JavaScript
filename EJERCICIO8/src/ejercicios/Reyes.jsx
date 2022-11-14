// import React from "react";
// import "./App.css";

// // si pongo prop(o cualquier cosa), recoge tdas las propiedades del pàdre, `para llegar a ellas tendria que poner prop.vivo, etc..
// // se recomienda destructuring

// function Reyes({ reyes }) {
//   const incrementar = (e) => {
//     e.target.innerHTML = Number(e.target.innerHTML) + 1;
//   };
//   const resultado = reyes
//     .filter((e) => e.reinado > 10 && e.vacasComidas > 10)
//     .map((e) => (
//       <div key={e.nombre}>
//         {e.nombre}
//         <div className="numero" onClick={incrementar}>
//           0
//         </div>
//       </div>
//     ));

//   return <>{resultado}</>;
// }
// export default Reyes;

// // MI SOLUCION
// // const resultado = reyes.filter((valor) => valor.nombre.includes("g"));

// //   const borrar = (e) => {
// //     e.target.parentNode.remove();
// //     console.log(e);
// //   };

// //   return (
// //     <>
// //       {resultado.map((rey) => (
// //         <div className="rey">
// //           {rey.nombre} <button onClick={borrar}>Borrar</button>
// //         </div>
// //       ))}
// //     </>
// //   );

// // SOLUCION DEL PROFE

// // const borrar = (e) => {
// //     e.target.parentNode.remove();
// //   };

// //   return (
// //     <>
// //       {reyes
// //         .filter((valor) => !valor.nombre.includes("g"))
// //         .map((valor) => (
// //           <div key={valor.nombre}>
// //             {valor.nombre}
// //             <button onClick={borrar}>Borrar</button>
// //           </div>
// //         ))}
// //     </>
// //   );

// //   //

// // const resultado = reyes.find(
// //     (e) => e.nombre.substring(0, 1) == "ñ" || e.nombre.substring(0, 1) == "Ñ"
// //   );

// //   return (
// //     <>{resultado == undefined ? "No se ha encontrado" : resultado.nombre}</>
// //   );
// //
