

import { Schema, model } from 'mongoose'

require ('dotenv').config()

const { Category } = process.env, { ObjectId } = Schema.Types

export default model ( Category, new Schema ({

    Name: { type: String, unique: true, trim: true, maxlength: 20, required: true },

    Image: { type: String, trim: true, maxlength: 100, required: true },

}, { timestamps: true, versionKey: false }), Category )

