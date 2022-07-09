const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wardSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    district: {
        type: Schema.Types.ObjectId,
        ref: 'district',
    }
},{
    collection: 'ward'
})
const wardSchemaModel = mongoose.model('ward', wardSchema);
module.exports = wardSchemaModel;
console.log('Create Ward success')
wardSchemaModel.create({
    name: 'Phường 1',
    district: 'DT01'
}).then(()=>{
    console.log('Create Ward success')
}).catch(err=>{
    console.log('Create Ward fail')
})