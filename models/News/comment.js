const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const today = new Date();

const commentSchema = new Schema({
    idnews:{
        type:String,
        required:true
    },
    idmb:{
        type:String,
        required:true
    },
    contentcomment:{
        type:String,
        required:true
    },
    timeComment:{
        type:String,
        default:today
    }
},{
    collection:'comment',
    versionKey:false
})

const commentSchemaModel = mongoose.model('comment',commentSchema);
module.exports = commentSchemaModel;