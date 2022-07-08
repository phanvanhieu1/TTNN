const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typesNewSchema = new Schema({
    idnews:{
        type:String,
        required:true
    },
    nametype:{
        type:String,
        required:true
    }
},{
    collection:'typesnew',
    versionKey:false
})
const typesNewSchemaModel = mongoose.model('typesnew',typesNewSchema);
module.exports = typesNewSchemaModel;