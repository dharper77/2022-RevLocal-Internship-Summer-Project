const mongoose = require('mongoose');
const Product = require('./database/schemas/Product')

//const connection = mongoose.connect("mongodb+srv://landonbconnell:consumore@cluster0.7lcwkon.mongodb.net/consumore" )
async function run() {
    // creates new product AND saves it to the database
    const teaKettle = await Product.create({
        id: 20,
        title: 'Electric Glass and Steel Hot Tea Water Kettle - 1.7 Liter',
        price: 27.99,
        description: 'Fast-heating electric glass and steel kettle for quickly and conveniently boiling water',
        category: 'Kitchen',
        image: 'https://m.media-amazon.com/images/I/812C5q3i5+L._AC_SX679_.jpg',
        rating: {
            rate: 4.5,
            count: 9061
        }
    })
    //console.log(teaKettle)
}

//run()
