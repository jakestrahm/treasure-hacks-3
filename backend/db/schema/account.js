import mongoose from 'mongoose';
const { Schema, SchemaTypes} = mongoose;

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

export default AccountModel; 