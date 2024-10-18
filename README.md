# Documentación POC

### Configuración Contentful

1. Creamos una cuenta en [app.contentful.com](http://app.contentful.com)
2. Generamos las entidades con las que vamos a trabajar y sus relaciones.
   1. (En la investigación noté que Contentful no permite realizar relaciones bidireccionales, por lo cual es necesario crear las relaciones en cada entidad respectiva si se desea ese comportamiento)
3. Una vez creados los content models, podemos empezar a generar contenido a través de un formulario, seleccionando el tipo de modelo que se desea registrar.
   1. Importante: Todo el contenido que generemos debe estar publicado para poder visualizarlo desde un cliente externo.
4. En Settings > API Keys generamos las credenciales que usaremos en la aplicación.
   1. Obtenemos el SPACE_ID y el ACCESS_TOKEN
5. Podemos acceder a la documentación de Contentful en [https://www.contentful.com/developers/docs/](https://www.contentful.com/developers/docs/)

### Configuración Front

1. Para realizar las pruebas, decidimos utilizar Next.js en el front
2. Para obtener los datos de Contentful, uno de los métodos es instalar el SDK `npm install contentful`
3. Creamos el siguiente script para realizar la conexión

   ```jsx
   import { createClient } from "contentful";

   // Agregamos las credenciales al cliente para conectar.
   const client = createClient({
     space: process.env.CONTENTFUL_SPACE_ID!,
     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
   });

   const entries = await client.getEntries({
   	{ content_type: "user" } // user es un content model definido en Contentful
   });
   return entries.item; // todos los usuarios publicados.
   ```

4. Con esto ya tenemos acceso a los datos publicados para el modelo consultado. Se pueden realizar diversas consultas para obtener la data específica que se requiere.
5. Importante: En Next.js debemos configurar el archivo next.config.mjs para permitir la visualización de imágenes.

   ```jsx
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     images: {
       remotePatterns: [
         {
           protocol: "https",
           hostname: "images.ctfassets.net",
           port: "",
         },
       ],
     },
   };

   export default nextConfig;
   ```

6. Este es un ejemplo de los datos obtenidos desde la API

   ```jsx
    [
     {
       metadata: { tags: [], concepts: [] },
       sys: {
         space: [Object],
         id: '7bN4vWTbTiPbre1a7CZvFD',
         type: 'Entry',
         createdAt: '2024-10-18T12:41:40.016Z',
         updatedAt: '2024-10-18T12:41:40.016Z',
         environment: [Object],
         revision: 1,
         contentType: [Object],
         locale: 'en-US'
       },
       fields: {
         title: 'Post sin imágenes',
         description: 'Lorem ipsum...',
         isActive: true,
         user: [Object]
       }
     },
     {...}
   ]
   ```
