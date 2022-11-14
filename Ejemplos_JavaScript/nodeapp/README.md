# NodeApp

To start the application use:

 ```sh
 npm install // instalar dependencias
 ```

 In producction:

 ```sh
 npm start
 ```

 In development:

 ```sh
 npm run dev
 ```

## Inicializar la BD

Para iniciar la BD al estado inicial, se puede usar el comando:

''''
npm run initdb

* ATENCION * Esto borrará todos los datos de la BD y cargara el estado inicial.

 ## Metodos del API

 El API se accede en /api

lista de agentes:
 -/api/agentes

filtros:
 -http://localhosto:3000/api/agentes/?name=Smith&age=30

paginacion:
 -http://localhost:3000/api/agentes/?skip=2&limit=2

 Eligiendo que campos quiero:
 -http://localhost:3000/api/agentes/?select=address -_id address

 Ordenacion:
 -http://localhost:3000/api/agentes/?sort=age name

 buscar un agente por ID:

 -/api/agentes/_id:

 crear un agente:

 -POST /api/agentes

 Eliminar un agente:

 -DELETE /api/agentes:id