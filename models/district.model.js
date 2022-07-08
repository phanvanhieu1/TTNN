const mongoose = require('mongoose');
const schema = mongoose.Schema;

const districtSchema = new schema({
    code: String,
    name: String,
    type: String,
    typeName: String,
    parent_code: String,
},{
    versionKey: false,
    collection: 'district'
})
const districtSchemaModel = mongoose.model('district', districtSchema);
module.exports = districtSchemaModel;