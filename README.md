# Prueba de Backend NodeJS
Crear un CRUD para crear productos conectado a MongoDB.

## Presentación 

Soy Yonathan Gutiérrez Rodríguez, me interesa entrar al programa y formarme como un buen desarrollador además de demostrar lo que puedo aportar a la región en cuanto a talento se trata, me siento emocionado por esta oportunidad ya que creo en la premisa de Platzi y una región con mayores estándares de vida para sus pobladores…

## Arquitectura

<img src="https://live.staticflickr.com/65535/51184362209_51b82f629e_k.jpg" alt="nodeplatzi">

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

### Licencia
La licencia [MIT](https://opensource.org/licenses/MIT).
