// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import productsArr from './products'


export default function App() {

const [addToCart, setAddToCart] = useState([])


//  console.log('this is map', cartItem)
  
  const handleAdd = (ele) => {
    setAddToCart([
       ...addToCart,
       ele
    ])
        console.log(ele)
  }

const handleRemove = () => {
    // setRemoveFromCart()
  }



const products = productsArr.map((product, index) => {
  return (
    <li key={index}
       onClick= {() => handleAdd(product)}>
       {product.name} - $ {product.price}
        </li>
       )
      })
      console.log()
      
      return (
        <div className="App">
           <h1>Big Time Shopping</h1>
           <AllTheThings products={products}
           handleClick={handleAdd}/>
           <div className="AllTheThings" />
           <MyShoppingCart cartItem={addToCart} />
        </div>
      )
    }