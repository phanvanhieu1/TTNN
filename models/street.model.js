const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const streetSchema = new Schema({
    code: String,
    name: String,
    type: String,
    typeName: String,
    parent_code: String,
    parent_code_city: String,
},{
    versionKey: false,
    collection: 'street'
})
const streetSchemaModel = mongoose.model('street', streetSchema);
module.exports = streetSchemaModel;