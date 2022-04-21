//SIMPLE MIDDLE WARE FUNCTION
//'next' is to move to the next middle ware function in the stack
const moment=require('moment');
const logger=(req,res,next)=>{
    console.log('hello');
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next();
}
//above..every time we make a request on postman, hello is printed in terminal

//moment exported to index
module.exports=logger;