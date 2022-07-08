const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    code: {
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    typename:{
        type:String,
        required:true
    }
},{
    collection: 'city'
})
const citySchemaModel = mongoose.model('city', citySchema);
module.exports = citySchemaModel;
citySchemaModel.create({
    code:1,
    name:'Hà Nội',
    type:'city',
    typename:'Thành phố'
}).then(()=>{
    console.log('Create City Hà Nội success')
}).catch(err=>{console.log('Create City Hà Nội fail')});