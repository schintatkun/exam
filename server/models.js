const mongoose = require('mongoose');
const customID = require('mongoose-hook-custom-id');
mongoose.connect("mongodb://localhost/beltexam", {useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('DB is ready'));

var id = 0;
const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, " Product must contain a Name"],
        minlength:[3, "Name must be at least 3 characters long."]
    },
    qty:{
        type: Number,
        required:[true, "Product must contain a Qty"],
        min: [1, "Qty must be greater than zero"]
    },
    price: {
        type: Number,
        required: [true, "Product must contain a Price"],
        min: [1, "price value must be greater than zero"]
    }
},{timestamps:true})

ProductSchema.plugin(customID, {mongoose:mongoose , 
generator:function(){return Math.floor(Math.random()*100000);}})
module.exports = mongoose.model('Product',ProductSchema)