const express= require('express');
const router= express.Router();
const path= require('path');
const bodyParser= require('body-parser');
//const Expenses= require('../model/expData')
const expController= require('../controller/expenses');

router.use(bodyParser.urlencoded({extended: false}));
router.get('/', (req, res)=>{
    //console.log(req.body);
    res.sendFile(path.join(__dirname, "..", "view", "expenseT.html"));
});

router.post('/expense-tracker', expController.postExpense);
router.get('/expense-tracker', expController.showExpense);
router.delete('/expense-tracker/:id', expController.deleteExp);

module.exports= router;