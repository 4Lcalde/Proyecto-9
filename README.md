Este proyecto realiza un proceso de web scrapping sobre una tienda de ropa.

A través del scrapping se obtienen los datos de nombre, precio e imagen de cada producto. Para iniciar el proceso se ha programado el comando npm run scrap. El cual, llama a la función scrapper del fichero scrapper.js, localizado en la carpeta utils.

Posteriormente, este proceso crea un archivo llamado productos.json dentro de la carpeta de trabajo denominado productos.json.

Hasta que el proceso de scrapping no se ha completado no se habilita la posibilidad de realizar la conexión con el servidor.

Levantando el servidor http://localhost:3000/api/v1/productos/ con el comando npm run dev se podrán realizar las funciones de un CRUD completo sobre la base de datos.

http://localhost:3000/api/v1/productos/publicar con el método GET devolverá los datos existentes.
http://localhost:3000/api/v1/productos/publicar/publicar con el método POST permite subir a mongo atlas los datos de productos.json
http://localhost:3000/api/v1/productos/:id con el método PUT permite modificar datos existentes
http://localhost:3000/api/v1/productos/:id con el método DELETE permite eliminar los datos de cualquier producto.
#   P r o y e c t o - 9  
 