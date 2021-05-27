

import { Schema, model } from 'mongoose'

require ('dotenv').config()

const { Product, Category } = process.env, { ObjectId } = Schema.Types

export default model ( Product, new Schema ({

    Name: { type: String, unique: true, trim: true, maxlength: 20, required: true },

    Price: { type: Number, min: 1, required: true },

    Description: { type: String, trim: true, maxlength: 40 },

    CategoryID: { type: ObjectId, trim: true, ref: Category, required: true },

    Image: { type: String, trim: true, maxlength: 100, required: true },

}, { timestamps: true, versionKey: false }), Product )

