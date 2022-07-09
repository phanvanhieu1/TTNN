const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },
    name:{
        type: String,
        required: true,
        unique: true,
    }
},{
    collection: 'city'
})
const citySchemaModel = mongoose.model('city', citySchema);
module.exports = citySchemaModel

citySchemaModel.create({
    name: 'Đà Nẵng'
}).then(()=>{
    console.log('Create City success')
}).catch(err=>{
    console.log('Create City fail')
})