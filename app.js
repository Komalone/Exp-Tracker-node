const express= require('express');
const cors=require('cors');
const bodyParser= require('body-parser');
const sequelize = require('./store/expDatapath');
const ExpRoute= require('./routes/Expense')

const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(ExpRoute);


sequelize.sync();
app.listen(3000, ()=>{
  console.log("running");
});
