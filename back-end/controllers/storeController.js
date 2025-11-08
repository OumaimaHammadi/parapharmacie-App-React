import Product from '../models/Products.js'



export const store = async(req,res)=>{
let products = await Product.find({})
console.log("Product store  Fetched")
res.send(products)

}


