

require ('dotenv').config()
import { hash, compare } from 'bcryptjs'
import { sign, verify } from 'jsonwebtoken'
import { Controller as C } from '../../Controller'

import { UserInputError, AuthenticationError } from 'apollo-server-express'


import { Category, Product } from '../../Database'


import {
    ObjectIDResolver as ObjectID,
    TimestampResolver as Timestamp,
    DateResolver as Date,
    BigIntResolver as BigInt,
    NonEmptyStringResolver as NonEmptyString,
    EmailAddressResolver as EmailAddress,
    PositiveIntResolver as PositiveInt,
    PositiveFloatResolver as PositiveFloat
} from 'graphql-scalars'


const ExecuteCategory = (Data, Fields) => new C ( Data, Fields, Category ),
ExecuteProduct = (Data, Fields) => new C ( Data, Fields, Product )


export default {


    Query: {

        _: async () => await true,

        // Categoria

        getCategory: async (_, { ID: _id }) => await ExecuteCategory().FindOne({ _id }),
        getCategories: async (_, { Query: { Limit, OffSet } = { } }) => await ExecuteCategory().Find(Limit, OffSet),

        // Producto

        getProduct: async (_, { ID: _id }) => await ExecuteProduct().FindOne({ _id }),
        getProducts: async (_, { Query: { Limit, OffSet } = { } }) => await ExecuteProduct().Find(Limit, OffSet),

    },


    Mutation: {

        _: async () => await true,

        // Producto

        createProduct: async (_, { Producto: { Name, Price, Description, CategoryID, Image } = { } }) => await ExecuteProduct({ Name, Price, Description, CategoryID, Image }).Create(),

        updateProduct: async (_, { ID: _id, Producto: { Name, Price, Description, CategoryID, Image } = { } }) => await ExecuteProduct({ Name, Price, Description, CategoryID, Image }).FindOneAndUpdateBy({ _id: _id.trim() }),
        
        deleteProduct: async (_, { ID: _id }) => await ExecuteProduct().FindOneAndRemove({ _id: _id.trim() }),

        // Categoria

        createCategory: async (_, { Categoria: { Name, Image } = { } }) => await ExecuteCategory({ Name, Image }).Create(),

        updateCategory: async (_, { ID: _id, Categoria: { Name, Image } = { } }) => await ExecuteCategory({ Name, Image }).FindOneAndUpdateBy({ _id: _id.trim() }),

        deleteCategory: async (_, { ID: _id }) => await ExecuteCategory().FindOneAndRemove({ _id: _id.trim() })

    },


    Producto: { CategoryID: async ({ CategoryID: _id }) => await ExecuteCategory().FindOne({ _id }) },


    ObjectID, Date, Timestamp, BigInt, NonEmptyString, EmailAddress, PositiveInt, PositiveFloat


}

