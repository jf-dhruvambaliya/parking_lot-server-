
const connect =require('./config/db');
const cors = require('cors');
const express = require('express');
const spot=require('./controller/spot.controller');
const floors=require('./controller/floors.controller');
const assistat=require('./controller/assistat.controller');
const app = express();
app.use(cors({origin:"*"}));

app.use(express.json());

app.use("/spot",spot)
app.use("/floor",floors)
app.use("/assistat",assistat)

app.listen(3050,async()=>{
          try {
             connect();
                console.log("http://localhost:3050/"); 
          } catch (error) {
              console.log(error.message);
          }
})
