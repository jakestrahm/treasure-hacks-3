import mongoose from 'mongoose';
const { Schema, SchemaTypes} = mongoose;

const itemSchema = new Schema({
    id: SchemaTypes.String,
    userId: SchemaTypes.String,
    name: SchemaTypes.String,
    completed: SchemaTypes.Boolean, 
    categories: [SchemaTypes.String],
    description: {
        type: SchemaTypes.String,
        required: false,
    },
    dueBy: SchemaTypes.Number,
    createdAt: SchemaTypes.Number,
    updatedAt: SchemaTypes.Number,
}); 

const ItemModel = mongoose.model("Item", itemSchema, "items");

export default ItemModel; 