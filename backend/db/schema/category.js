import mongoose from 'mongoose';
const { Schema, SchemaTypes} = mongoose;

const categorySchema = new Schema({
    id: SchemaTypes.String,
    userId: SchemaTypes.String,
    name: SchemaTypes.String,
    createdAt: SchemaTypes.Number,
    updatedAt: SchemaTypes,
});

const CategoryModel = mongoose.model("Category", categorySchema, "categories");

export default CategoryModel; 