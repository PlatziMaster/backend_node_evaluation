# Prueba de Backend NodeJS
Crear un CRUD para crear productos conectado a MongoDB.

### Instalación
```
npm install
```

### Ejecución
```
npm run start
```

## Modelos

### Product
Un Producto debe tener los siguientes atributos:
- name
- price
- description
- categoryId
- image

### Category
Una Categoría debe tener los siguientes atributos:
- name
- image

## Requerimientos

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

## Notas finales

El proyecto fue desplegado en un vps, el enlace es el siguiente

https://platzi-evaluation.nuho.dev/api/

La arquitectura utilizada fue una version mas simple de la "clean architecture"

El proyecto funciona correctamente, sin embargo por alguna razon no fue capaz de pasar el ultimo test de "DELETE" en los endpoints de categoria 😕