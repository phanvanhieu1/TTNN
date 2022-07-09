const News = require('../models/News/news.model');
const Citys = require('../models/city.model');
const Districts = require('../models/district.model');

const new_All = async (req, res) => {
    try {
         await News.find({
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

const News_Detail= async (req,res)=>{
    try{
        await News.find({"_id":req.params.id},(err,result)=>{
                if(err) console.log(err);
                res.json({
                    news:result
            })
        })
            
    }catch(err){
        res.json({
            result:false,
            message:err
        })
    }
}

const GetNameCity= async (req,res)=>{
    try{
        await Citys.findOne({"code":req.params.code_city},(err, result)=> {
            if(err) console.log(err);
            res.json({
                NameCity:result.name
            })
        })
    }catch(err){
        res.json({
            result:false,
            message:err
        })
    }
}
const GetNameDictrict= async (req,res)=>{
    try{
        await Districts.findOne({"code":req.params.code_dictrict},(err, result)=> {
            if(err) console.log(err);
            res.json({
                NameDistricts:result.typename
            })
        })
    }catch(err){
        res.json({
            result:false,
            message:err
        })
    }
}
const NewsNears= async (req,res)=>{
    try{
        await News.find({"address.code_city":req.params.code_city,"address.code_dictrict":req.params.code_dictrict},(err, result)=> {
            if(err) console.log(err);
            res.json({
                NewsNears:result
            })
        })
    }catch(err){
        res.json({
            result:false,
            NewsNears:'',
            message:err
        })
    }
}

const News_RoomHome= async (req,res)=>{
    try{
        await News.find({"infor.state_news":1,"infor.typehome":1}).sort({"infor.date_now":-1}).limit(6).exec(
            (err, result)=> {
                if(err) console.log(err);
                res.json({
                    NewsRoom:result
                })
        }) 
    }catch(err){
        res.json({
            result:false,
            message:err
        })
    }
}
const News_HouseHome=async (req,res)=>{
    try{
        await News.find({"infor.state_news":1,"infor.typehome":2}).sort({"infor.date_now":-1}).limit(6).exec(
            (err, result)=> {
                if(err) console.log(err);
                res.json({
                    HouseHome:result
                })
        }) 
    }catch(err){
        res.json({
            result:false,
            message:err
        })
    }
}
const News_ApartmentHome=async (req,res)=>{
    try{
        await News.find({"infor.state_news":1,"infor.typehome":3}).sort({"infor.date_now":-1}).limit(6).exec(
            (err, result)=> {
                if(err) console.log(err);
                res.json({
                    ApartmentHome:result
                })
        }) 
    }catch(err){
        res.json({
            result:false,
            message:err
        })
    }
}
const NewsFilter=async (req,res)=>{
    //let{code_city,code_dictrict,code_street,typehome,valuePrice,valueAcreage}
   
    try{
        let{PriceMin,PriceMax,AcreageMin,AcreageMax}=req.body;
          await News.find({"infor.price":{ $gte: PriceMin, $lte: PriceMax},"infor.acreage":{ $gte: AcreageMin, $lte: AcreageMax},"infor.state_news":1}).exec(
            (err, result)=> {
                if(err) console.log(err);
                res.json({
                    NewsFilter:result
                })
            })

    }catch(err){
        console.log(err);
        res.json({
            result:false,
            message:err
        })
    }
}

const getIndex = (req, res) => {
    res.render('index.ejs')
}

module.exports = {
    new_All,
    News_Detail,
    GetNameCity,
    GetNameDictrict,
    NewsNears,
    News_RoomHome,
    News_HouseHome,
    News_ApartmentHome,
    NewsFilter,
    getIndex
}