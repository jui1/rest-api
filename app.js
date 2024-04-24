const express = require('express');

const app = express();
const  productRoutes = require('./Routes/Product')
const morgaon = require('morgan')


app.use(morgaon('dev'))
// app.use((req, res, next) => {


//     res.status(200).json({

//         message: 'It works!'
//     });

// });

app.use('/products' , productRoutes)


app.use((req, res,next) =>{
    const rror = new Error ('Not found');
    rror.status(404);
    next(rror);
})


app.use()

module.exports = app;