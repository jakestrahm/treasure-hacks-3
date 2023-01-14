import mongoose from 'mongoose';
const { Schema, SchemaTypes} = mongoose;

const CategoryModel = mongoose.model('categories', new Schema({
    id: SchemaTypes.String,
    userId: SchemaTypes.String,
    name: SchemaTypes.String,
    createdAt: SchemaTypes.Number,
    updatedAt: SchemaTypes,
}));

export default CategoryModel; 