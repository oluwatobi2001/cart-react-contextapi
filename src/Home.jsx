import React, {useContext, useState} from 'react'
import {faker} from '@faker-js/faker';
import SingleProducts from './SingleProducts';
import './App.css'
import { Carty } from './Context';


const Home = () => {
const {cart, setCart } = useContext(Carty);
    const productArray = [...Array(20)].map( () => ( {id: faker.datatype.uuid(), 
        name:faker.commerce.productName(),
    price : faker.commerce.price(),
image: faker.image.abstract()
}));

console.log(productArray);

const [products] = useState(productArray) 
console.log(cart)
    return ( <div className="productsContainer">
    {products.map((prody) => (

    <SingleProducts prod ={prody} cart= {cart} setCart = {setCart} />

    ))}
</div>
    )
}

export default Home;