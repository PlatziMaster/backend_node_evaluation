# Backend App
Create a CRUD to create products connected to MongoDB.

## Build

* Copy the sample configuration file and fill the right values according to your environment

```bash

# develop
cp .env-example .env

# staging 
cp .env-sample .stag.env

# production
cp .env-sample .prod.env
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Build the app

```bash
$ npm run build
```

## Models

### Product
A Product must have the following attributes:
- name
- price
- description
- stock
- categoryId
- image

### Category
A Category must have the following attributes:
- name
- image

## Requirements

### CRUD of products
- [ ] GET `/api/products/` Endpoint to return list of products.
- [ ] GET `/api/products/{id}/` Endpoint to return a product.
- [ ] POST `/api/products/` Endpoint to create a product.
- [ ] PUT `/api/products/{id}/` Endpoint to modify a product.
- [ ] DELETE `/api/products/{id}/` Endpoint to delete a product.

### CRUD of categories
- [ ] GET `/api/categories/` Endpoint to return list of categories.
- [ ] GET `/api/categories/{id}/` Endpoint to return a category.
- [ ] POST `/api/categories/` Endpoint to create a category.
- [ ] PUT `/api/categories/{id}/` Endpoint to modify a category.
- [ ] DELETE `/api/categories/{id}/` Endpoint to delete a category.
- [ ] GET `/api/categories/{id}/products` Endpoint to return the list of products belonging to a category.

## Instrucciones

1. Utilizando el archivo `.env-example` realiza la configuración para tu archivo `.env`.
2. Proponer una arquitectura la aplicación.
3. Verificar que la conexión de tu aplicación a MongoDBAtlas funcione.
4. Realizar el deploy de tu aplicación.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
1. Debes tener mongoDB en local corriendo para hacer las pruebas.
2. Y poner las variables de ambiente en el archivo `.env`.


## Evidence
![alt backend-api](/docs/images/api.png)
