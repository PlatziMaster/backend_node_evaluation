# Prueba de Backend NodeJS

¡Hola! Este un CRUD para crear productos conectado a MongoDB.

La base de datos de prueba en este proyecto es una tienda de productos para la aplicación de pestañas postizas. En esta tienda hay pestañas y pegamento como categorías de producto y se consideran al menos dos marcas de cada uno de los productos.

Puedes usar la aplicación en <https://stormy-forest-37132.herokuapp.com/>

## Cómo usar la aplicación

La aplicación está desplegada en Heroku. Es posible probarla usando los enlaces en Postman o en Insomnia.

### Endpoints de productos

- **Obtener la lista de todos los productos**
  Realiza una petición GET con `https://stormy-forest-37132.herokuapp.com/api/products`

- **Retorna un artículo particular**
  Añade al enlace anterior un id y realiza una petición GET. Por ejemplo:
  `https://stormy-forest-37132.herokuapp.com/api/products/610176b90e09e779cf996665` devuelve pestañas con marca Nagaraku.

- **Crea un producto Nuevo**
  En el endpoint `https://stormy-forest-37132.herokuapp.com/api/products/` usa una petición POST y agrega los datos de un nuevo producto.
  Por ejemplo, puedes crear unas nuevas pinzas usando el siguiente código de JSON

  `{"name":"Pinzas Pequeñas", "price":70, "description": "Pinzas para poner pestañas, tamaño pequeño.", "categoryId":"610312300bd2c18ebb22e7a3","image":"https://http2.mlstatic.com/D_NQ_NP_2X_931080-MLM32548632659_102019-F.jpg"}`

- **Edita un producto**
  Por ejemplo, las pinzas azules (id 61046ad6e78b5f001587d6ff) tienen la categoría mal. Editalo usando su id haciendo una petición PUT en el endpoint `https://stormy-forest-37132.herokuapp.com/api/products/61046ad6e78b5f001587d6ff` con el siguiente código JSON

`{"name":"Pinzas Azules", "price":450, "description": "Pinzas para poner pestañas", "categoryId":"610312300bd2c18ebb22e7a3","image":"https://http2.mlstatic.com/D_NQ_NP_2X_931080-MLM32548632659_102019-F.jpg"}`

- **Borrar un producto**
  Puedes borrar un producto haciendo una petición DELETE con el endpoint de products seguido por el id del producto. Por ejemplo, puedes borrar las pinzas azules haciendo esta petición al endpoint `https://stormy-forest-37132.herokuapp.com/api/products/61046ad6e78b5f001587d6ff`

### Enpoints de Categorías

- **Ver la lista de las categorías**
  Realiza una petición GET con `https://stormy-forest-37132.herokuapp.com/api/products`
- **Retorna una categoría particular**
  Añade al enlace anterior un id y realiza una petición GET. Por ejemplo:
  `https://stormy-forest-37132.herokuapp.com/api/products/610077b127ff3d7645072de4` devuelve la categoría _pestañas_.
- **Crear una categoría**
  Usa el endpoint `https://stormy-forest-37132.herokuapp.com/api/categories/`con una petición POST para crear una categoría nueva. Por ejemplo, podemos crear la categoría _parches_ usando el código JSON

      `{"name":"Parchis", "image":"https://http2.mlstatic.com/D_NQ_NP_2X_709890-MLM45468647557_042021-F.jpg"}`

- **Editar una Categoría**
  Nos equivocamos en la categoría anterior. Tenemos que cambiar _parchis_ por _parches_ en el código anterior. Usa una petición PUT con el siguiente código JSON en el mismo endpoint
  `{"name":"Parchis", "image":"https://http2.mlstatic.com/D_NQ_NP_2X_709890-MLM45468647557_042021-F.jpg"}`

- **Borrar una categoría**
  Aún no tenemos nada en stock en la categoría de parches. Vamos a borrarla usando la petición DELETE en la dirección `https://stormy-forest-37132.herokuapp.com/api/categories/:{id}` usando el id que se generó automáticamente en esta categoría al crearla.

- **Ver todos los productos de una categoría**
  Podemos ver cuántos productos tenemos de la categoría _Lashes_ usando una petición GET en el endpoint `https://stormy-forest-37132.herokuapp.com/api/categories/610077b127ff3d7645072de4/products`. Prueba la aplicación con la categoría de Pinzas o la de pegamento. También puedes probarlo con las categorías nuevas que hagas, pero necesitas generar productos con esta categoría para que muestre algo más que una lista vacía.

## Características del modelo de la Base de Datos

### Product

El producto tiene los siguientes atributos:

- name
- price
- description
- categoryId
- image

### Category

La Categoría tiene los siguientes atributos:

- name
- image

## Requerimientos

### Instalación

````

npm install

```

### Ejecución

```

npm run start

```

### CRUD de productos

- [ ] GET `/api/products/` Endpoint para retornar la lista de productos.
- [ ] GET `/api/products/{id}/` Endpoint para retornar un producto.
- [ ] POST `/api/products/` Endpoint para crear un producto.
- [ ] PUT `/api/products/{id}/` Endpoint para modificar un producto.
- [ ] DELETE `/api/products/{id}/` Endpoint para eliminar un producto.

### CRUD de categorías

- [ ] GET `/api/categories/` Endpoint para retornar la lista de categorías.
- [ ] GET `/api/categories/{id}/` Endpoint para retornar un categoría.
- [ ] POST `/api/categories/` Endpoint para crear un categoría.
- [ ] PUT `/api/categories/{id}/` Endpoint para modificar un categoría.
- [ ] DELETE `/api/categories/{id}/` Endpoint para eliminar un categoría.
- [ ] GET `/api/categories/{id}/products` Endpoint para retornar la lista de productos que pertenecen a una categoría.

## Instrucciones

1. Utilizando el archivo `.env-example` realiza la configuración para tu archivo `.env`.
2. Proponer una arquitectura la aplicación.
3. Verificar que la conexión de tu aplicación a MongoDBAtlas funcione.
4. Realizar el deploy de tu aplicación.

### Correr pruebas en local

```

npm run test:e2e

```

1. Debes tener mongoDB en local corriendo para hacer las pruebas.
2. Y poner las variables de ambiente en el archivo `.env`.

## Enviar solución de reto

Debes de crear un "Fork" de este proyecto, revolverlo desde tu cuenta personal.

### Licencia

La licencia [MIT](https://opensource.org/licenses/MIT).

```

```

```
````
