const { parse } = require("dotenv");

const Market = [
    {id:1, nombre: 'Dell',marca: 'DELL G15', precio: 4500, cantidad: 10,img: src='https://www.lacuracaonline.com/media/catalog/product/4/6/464992000019_00.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'},
    {id:2, nombre: 'Asus',marca: 'ASUS ROG', precio: 3500, cantidad: 10},
    {id:3, nombre: 'HP',marca: 'HP Pavilion', precio: 2500, cantidad: 10},
    {id:4, nombre: 'Lenovo',marca: 'LENOVO LEGION', precio: 1500, cantidad: 10},
    {id:5, nombre: 'Acer',marca: 'ACER ASPIRE', precio: 5000, cantidad: 10},
    {id:6, nombre: 'APPLE',marca: 'Macbook Air M1', precio: 6500, cantidad: 10},
]
const index = (req, res) => {
    res.render('market/index', {market: Market})
}

const show = (req, res) => {
    const market = Market.find(market => market.id === parseInt(req.params.id));
    res.render('market/show', {market});
}
const create = (req, res) => {
    res.render('market/create');
}
const store = (req, res) => {
    const {nombre, marca, precio, cantidad} = req.body;
    const newMarket = {
        id: Market.length + 1,
        nombre,
        marca,
        precio,
        cantidad
    }
    Market.push(newMarket);
    res.redirect('/market');
}

const carts = (req, res) => {
    const selectedMarket = Market.filter(market => market.cantidad > 10);
    const total = selectedMarket.reduce((acc, market) => acc + market.cantidad, -1);
    res.render('market/carts', {selectedMarket, total});
    res.locals.message = `Se han agregado ${total} productos a tu carrito`;
}    
module.exports = {
    index,
    show,
    create,
    store,
    carts
}