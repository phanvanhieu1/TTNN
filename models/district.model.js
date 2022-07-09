const mongoose = require('mongoose');
const schema = mongoose.Schema;

const districtSchema = new schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    city: {
        type: schema.Types.ObjectId,
        ref: 'city',
    }
},{
    collection: 'district'
})
const districtSchemaModel = mongoose.model('district', districtSchema);
module.exports = districtSchemaModel;
districtSchemaModel.create({
    code: 'DT01',
    name: 'Cẩm Lệ',
},{
    code: 'DT02',
    name: 'Hải Châu',
},{
    code: 'DT03',
    name: 'Liên Chiểu',
},{
    code: 'DT04',
    name: 'Ngũ Hành Sơn',
},{
    code: 'DT05',
    name: 'Sơn Trà',
},{
    code: 'DT06',
    name: 'Thanh Khê',
},{
    code: 'DT07',
    name: 'Hòa Vang',
}).then(data=>{
    console.log('Create District success')
}).catch(err=>{console.log('Create District fail')});