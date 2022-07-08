const news = require('../models/News/news.model');
const citys = require('../models/city.model');
const districts = require('../models/district.model');

module.exports.new_All = async (req, res) => {
    try {
         await news.find({
            "infor.state_news":1
         }).soft({"infor.date_now":-1}).limit(10).exec(
            (err, result) => {
                if(err) console.log(result);
                res.JSON({ALL_NEWS:result});
            }
         );
    }catch(err){
        res.json({
            result: false,
            message:'Error'
        });
    }
}

module.exports.new_All_City = (req, res) => {
    citys.find({
        'code':'2'
    }).then(result => {
        res.json({
            result: true,
            message: 'Success',
            data: result
        })
    }).catch(err => {
        res.json({
            result: false,
            message: 'Error'
        })
    })  
}