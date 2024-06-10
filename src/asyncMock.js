const products = [

    {
        id: '1',
        name: 'Brownie clásico',
        price: 40,
        category: 'tortas-dulces',
        img: './src/img/brownie.jpg',
        stock: 10,
        description: 'descripcion de producto'

    },

    {
        id: '2',
        name: 'Cookies con chocolate',
        price: 35,
        category: 'tortas-dulces',
        img: './src/img/cookies.jpg',
        stock: 10,
        description: 'descripcion de producto'

    },

    {
        id: '3',
        name: 'Torta de Chocolate',
        price: 30,
        category: 'tortas-dulces',
        img: './src/img/tortachocolate.jpg',
        stock: 10,
        description: 'descripcion de producto'

    },



];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
};

export const getProductById = (productId) => {
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(products.find(product => product.id === productId))
        }, 500)
    })
}