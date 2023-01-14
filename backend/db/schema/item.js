import mongoose from 'mongoose';
const { Schema, SchemaTypes} = mongoose;

const ItemModel = mongoose.model('items', new Schema({
    id: SchemaTypes.String,
    userId: SchemaTypes.String,
    name: SchemaTypes.String,
    completed: SchemaTypes.Boolean, 
    description: {
        type: SchemaTypes.String,
        required: false,
    },
    dueBy: SchemaTypes.Number,
    createdAt: SchemaTypes.Number,
    updatedAt: SchemaTypes.Number,
}));

export default ItemModel; 