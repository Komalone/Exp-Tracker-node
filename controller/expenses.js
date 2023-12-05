const Expenses= require('../model/expData');

exports.postExpense= async(req, res)=>{
        //console.log(req.body)
        try{
            const amount= req.body.amount;
            const category= req.body.cato;
            const desciption= req.body.desc;
            
            const exp= await Expenses.create({
                amount, category, desciption
            })
            console.log("exp",exp)
            res.status(200).json({expDetail: exp, "message":"your expenses"})
    
        }catch(err){
            console.log(err);
        }
}

exports.showExpense= async(req, res)=>{
    try{
    const data= await Expenses.findAll();
    console.log("data to show",data);
    res.status(200).json({expDetail: data, "message": "show"})
    }catch(err){
        console.log(err);
    }
}

exports.deleteExp= async(req, res)=>{
    try{
        const id= req.params.id;
        console.log(id);
        await Expenses.destroy({where: {id: id}});
        res.status(200).json({"message": "deleted"})
    }catch(err){
        console.log(err);
    }
}