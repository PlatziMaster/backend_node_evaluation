

import express from 'express'

import { ApolloServer } from 'apollo-server-express'

import { loadSchemaSync } from '@graphql-tools/load'

import { addResolversToSchema } from '@graphql-tools/schema'

import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'

import { composeResolvers } from '@graphql-tools/resolvers-composition'

// import Contrains from './Resources/Schema/Resolvers/Constraints'

import resolvers from './Resources/Schema/Resolvers'


const { error } = require ('dotenv').config(), { connect, set } = require ('mongoose'),
app = express(), { PORT, MONGO_HOST, MONGO_PORT, MONGO_DB_NAME } = process.env,
server = new ApolloServer({ schema: addResolversToSchema({ schema: loadSchemaSync(`${ __dirname }/Resources/Schema/Typedefs.graphql`, { loaders: [ new GraphQLFileLoader() ] }), resolvers: composeResolvers(resolvers /* Contrains */ ) }), context: async ({ req: { headers: { auth: Auth } = { Auth: undefined } } }) => await ({ Auth }), tracing: true })


app.disable('x-powered-by')


server.applyMiddleware({ app })


app.listen({ port: PORT }, async () => {

    try {

        if (error)
            throw await new Error ('Excepcion importando las variables de entorno')

        set('useCreateIndex', true)

        const MongoAddress = `mongodb://${ MONGO_HOST }:${ MONGO_PORT }/${ MONGO_DB_NAME }`

        await connect(MongoAddress, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, async e => await console.log(`${ !e ? 'Conectado a mongo' : 'Excepcion en la conexion de mongo' }\n${ MongoAddress }\nServidor iniciado en localhost:${ PORT + server.graphqlPath }`) )


    } catch (E) {

        await console.log(E)

    }

})

