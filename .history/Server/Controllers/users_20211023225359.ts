import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose Schema

const InformSchema = new Schema
({
    name: String,
    number: String,
    email: String
},
{
    collection: "address"
});

const Model = mongoose.model("Inform", InformSchema);
export default Model;