import React, { useEffect } from 'react'
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Cart = () => {

  const { products, cartItems, currency } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems])

  return (
    <div className="border-t pt-14">
     <div className="text-2xl mb-3">
      <Title text1={'YOUR'} text2={'CART'} />
     </div>
     <div>
       {
        cartData.map((item, index) => {
          const product = products.find(product => product._id === item._id);

          return (
            <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] gap-4 items-center">
              <div className="flex items-start gap-6">
                <img src={product.image[0]} alt='productimage' className="w-16 sm:w-20" />
                <div className="flex flex-col">
                  <h2 className="text-xs font-medium sm:text-lg">{product.name}</h2>
                </div>
                <div className='flex items-center gap-5 mt-2'>
                  <p>{currency}{product.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-sm">Qty: {item.quantity}</p>
                <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
              </div>
            </div>
          )
        })
       }
     </div>

    </div>
  )
}

export default Cart
