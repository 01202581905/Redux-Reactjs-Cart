let initialState = [
    {
        id: 1,
        name: 'Iphone',
        img: 'https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-600x600.jpg',
        description: 'description',
        price: 500,
        inventory: 20,
        rating: 2
    },
    {
        id: 2,
        name: 'Samsung',
        img: 'https://cdn.tgdd.vn/Products/Images/42/204403/samsung-galaxy-a30s-green-600x600.jpg',
        description: 'description',
        price: 300,
        inventory: 10,
        rating: 4
    },
    {
        id: 3,
        name: 'Oppo',
        img: 'https://cdn.tgdd.vn/Products/Images/42/202028/oppo-a9-600x600-trang-600x600.jpg',
        description: 'description',
        price: 100,
        inventory: 5,
        rating: 5
    },
    {
        id: 4,
        name: 'LG',
        img: 'https://cdn.tgdd.vn/Products/Images/42/220826/lg-style3-600x600.jpg',
        description: 'description',
        price: 200,
        inventory: 10,
        rating: 1
    },
];

const products = ( state = initialState, action ) => {
    switch(action.type) {
        default: return state;
    }
};

export default products;