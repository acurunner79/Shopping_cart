import React from 'react';

function MyShoppingCart(props) {
console.log('For You', props)
  const items = props.cartItem.map((product, index) => {
      return (
        <li>
          {product.name} - $ {product.price}
        </li>
      )
  })
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {items}
    </div>
  );
}

export default MyShoppingCart;
