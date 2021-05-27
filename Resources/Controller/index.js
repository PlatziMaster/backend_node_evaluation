

require ('json-bigint-patch')
import { ApolloError, UserInputError } from 'apollo-server-express'


class Controller {


    constructor ( Data, Fields, Schema ) {

        this.Data = Data
        this.Fields = Fields
        this.Model = Schema

    }


    async Create ( Exception = 'Excepcion en el guardado de datos' ) {

        try {

            return await this.Model(this.Data).save()

        } catch ({ message: m }) {

            throw await new ApolloError ( m || Exception )

        }

    }


    async FindOne ( Filter, Excepcion = 'Excepcion en la consulta' ) {

        try {

            return await this.Model.findOne(JSON.parse(JSON.stringify(Filter)))

        } catch ({ message: m }) {

            throw new ApolloError ( m || Excepcion )

        }

    }


    async Find ( Limit = 1, OffSet, Excepcion = 'Excepcion en la consulta' ) {

        try {

            return await this.Model.find(this.Data && JSON.parse(JSON.stringify(this.Data)), this.Fields).limit(Limit).skip(OffSet)

        } catch ({ message: m }) {

            throw new ApolloError ( m || Excepcion )

        }

    }


    async FindOneAndUpdateBy ( Filter, Exception = 'Excepcion en la actualizacion del dato', UpSert ) {

        try {

            await this.Model.updateOne(JSON.parse(JSON.stringify(Filter)), this.Data, { upsert: UpSert, runValidators: true })

            console.log(await this.FindOne(Object.assign(Filter, this.Data)))

            return await this.FindOne(Object.assign(Filter, this.Data)) || new UserInputError (Exception)

        } catch ({ message: m }) {

            throw await new ApolloError ( m || Exception )

        }

    }


    async FindOneAndRemove ( Filter, Exception = 'Excepcion en la eliminacion del dato' ) {

        try {

            return await this.Model.findOneAndRemove(JSON.parse(JSON.stringify(Filter))) || new UserInputError ('El elemento a eleminar no se encontro')

        } catch ({ message: m }) {

            throw await new ApolloError ( m || Exception )

        }

    }


}


export { Controller }

