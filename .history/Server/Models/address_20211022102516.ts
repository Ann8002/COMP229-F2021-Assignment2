import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose Schema

const AddressSchema = new Schema
({
    name: String,
    number: String,
    email: String,
    },
{
    collection: "address"
});

const Model = mongoose.model("Address", AddressSchema);
export default Model;