const ProductModels = require('../models/productModel');
exports.getAddProductController = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new ProductModels(req.body.title);
    product.save();
    res.redirect('/');
};


exports.getProductsControl = (req, res, next) => {
    const products = ProductModels.fetchAll((products) => {

        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });


};