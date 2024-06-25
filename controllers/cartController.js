const product = require("../models/product");

const { productId, quantity } = req.body;
try {
    let cart = await Cart.findOne({ user: req.user.id});

    if (!cart) {
     cart = new Cart({ user: req.user.id, products: [] });
    }

    const product = await product.findById(productId);
    if (!product) {
        return res.json("Product not Found")
    }

    const productIndex = cart.products.findIndex(
        (item) => item.product.toString() === productId
    );

    if (productIndex !== -1) {
        cart.products[productIndex].quanlity += quantity;
        cart.products[productIndex].amount = 
            product.price * cart.products[productIndex].quantity;
    } else {
        cart.products.push({
            product: productId,
            quantity,
            amount: product.price * quantity,
        });
    }

    await cart.save()
    res.json(cart)
} catch (error) {
    res.json(error.message)
 
};

exports.getCart = async(req, res)=>{
    try {
        const cart = await Cart.findOne({user: req.user.id}),
        populate("products.product")
        if (!cart) {
            return res.json("Cart not Found")
        }

        res.json(cart)
    } catch (error) {
        res.json("Server Error", error)
    }
};

exports.updateQuantity = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const cart = await Cart.findOne({ user: req.user.id});
        const cartitem = cart.products.find(
            (item) => item.product.toString() === productId
        );
        if (cartItem) {
            cartItem.quanlity = quantity;
            await cart.save();
            const updatedCart = await Cart.fndOne({ user: req.user.id }).populate( "products.product" )
        };
        res.json(updatedCart);
    };
    } else {
        res.json("Product not found");
    }
     catch (error) {
        res.json("server error");
    };

    exports.removeItem = async (req, res)=> {
        const {productId} = req.body;
        try {
            const cart = await Cart.findOne({ user: req.user.id});
            cart.products = cart.products.filter(
                (item) => item.product.toString() !== productId
            );
            await cart.save()
            const updatedCart = 
        } catch () {
            
        }
    }