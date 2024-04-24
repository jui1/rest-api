const express =  require('express');
const  router = express.Router()

router.get('/' ,(req,res,next) =>{
    res.status(200).json({
        message:'Handling GET request to /products'
    })
})

router.post('/' ,(req,res,next) =>{
    res.status(200).json({
        message:'Handling POST  request to /products'
    })
})
router.get('/:ProductID',(req, res,next)=>{
    const id = req.params.ProductID;
    if(id==='special'){
        res.status(200).json({
            message:'You discvered the special ID',
            id : id
        });
    }else{
        res.status(200).json({
            message: 'You paased an id' ,
        })
    }
})



module.exports = router;