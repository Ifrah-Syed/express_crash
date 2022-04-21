//SIMPLE EXPRESS SERVER

const express=require('express');
const path=require('path');


const app=express();

const members=require('./members')

const logger= require('./middleware/logger')


//moment is a 3rd party package that deals with dates


//init middleware
app.use(logger);

//create route manually
// app.get('/',(req,res)=>{
//     res.send('<h1>Hello world</h1>')
//     res.sendfile(path.join(__dirname,'/','index.html'));
// })
//problematic to do it manually for every single file
//SO we can serve static pages by express by making our working folder as static



//this routes gets all members
app.get('/api/members',(req,res)=>{
res.json(members);
});

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname,'/')))
//easier than node
//'use' is used for middleware

const PORT=process.env.PORT || 8000;

app.listen(PORT,()=> console.log(`server started on port ${PORT}`));