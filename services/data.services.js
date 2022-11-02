const db = require('./db')

products = {
    1000: { product_name: 1000, price: "$20" },
    1001: { product_name: 1001, price: "$10" },
  }


  //transaction
const getProducts = (product) => {
      console.log(product);
    return db.User.findOne({
      product
    }).then(user=>{
      if(user){
    return {
        statusCode: 200,
        status: true,
        product: user.product
      }
  
    }
    else {
      return {
        statusCode: 401,
        status: false,
        message: "Invalid Credentials!!!!"
      }
    }
  })
  }
  
  module.exports = {
    getProducts,
  }