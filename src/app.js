const express = require('express');
const cors = require('cors'); 

const app = express();

app.use(cors());

const api =require("./api/routes/apiRouter");


app.use("/api/",api);



app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});
