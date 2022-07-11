import React, { useEffect, useContext} from 'react'
import {Carty} from './Context'
import SingleProducts from './SingleProducts'
import { useState } from 'react'

const Cart = ({}) => {
    const {cart, setCart } = useContext(Carty);
const [total, setTotal] = useState();
    useEffect(() => {
setTotal(cart.reduce((acc,curr ) => acc + Number(curr.price), 0 ))
    }, [cart])
    return (
<div className="ugg">
    <span style={{ fontSize: 30}}>My Cart </span>
 < br />
 <span style={{ fontSize: 30}} > Total: Ngn: {total  }</span>
<div className="productsContainer">
    {cart.map((prod) =>  (
        <SingleProducts   prod = {prod} key = {prod.id}/>
    ))}
</div>
</div>
    )
}

export  default Cart;