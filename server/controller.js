const Product = require('./models');

module.exports = {
    getAllProducts: function(req,res){
        Product.find({})
            .then(data=>console.log(data) || res.json(data))
            .catch(errs=>console.log(errs) || res.json(errs))
    },
    createProduct:function(req,res){
        Product.create(req.body)
            .then(data=>console.log(data)|| res.json(data))
            .catch(errs=>console.log(errs)|| res.json(errs))
    },
    getOneProduct:function(req,res){
        Product.findById(req.params.product_id)
            .then(data=>console.log(data) || res.json(data))
            .catch(errs=>console.log(errs) || res.json(errs))
    },
    deleteProduct: function(req, res){
        Product.findByIdAndDelete(req.params.product_id)
        .then(data=>console.log(data) || res.json(data))
        .catch(errs=>console.log(errs) || res.json(errs))
    },
    updateProduct: function(req, res){
        Product.findByIdAndUpdate(req.params.product_id, req.body, {new:true, runValidators:true, context: 'query'})
        .then(data=>console.log(data)|| res.json(data))
        .catch(errs=>console.log(errs) || res.json(errs))
    }
}