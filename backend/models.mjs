import mongoose from 'mongoose';
const { Schema, SchemaTypes} = mongoose;

// account
const accountSchema = new Schema({
    id: SchemaTypes.String,
    email: SchemaTypes.String,
    password: SchemaTypes.String,
    phoneNumber: {
        type: SchemaTypes.String,
        required: false,
    },
    smsEnabled: SchemaTypes.Boolean,
    emailEnabled: SchemaTypes.Boolean,
    createdAt: SchemaTypes.Number,
    updatedAt: SchemaTypes.Number,
});

const AccountModel = mongoose.model("Account", accountSchema, "accounts");


// category
const categorySchema = new Schema({
    id: SchemaTypes.String,
    accountId: SchemaTypes.String,
    name: SchemaTypes.String,
    createdAt: SchemaTypes.Number,
    updatedAt: SchemaTypes.Number,
});

const CategoryModel = mongoose.model("Category", categorySchema, "categories");


// item
const itemSchema = new Schema({
    id: SchemaTypes.String,
    accountId: SchemaTypes.String,
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

export { AccountModel, CategoryModel, ItemModel }