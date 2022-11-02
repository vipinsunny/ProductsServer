const mongoose=require('mongoose')


mongoose.connect('mongodb://localhost:27017/Products', {
    useNewUrlParser:true
})

const Product=mongoose.model('User',{
    product_name:String,
    price:String,
})

module.exports={
    Product
}