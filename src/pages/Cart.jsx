import React, { useEffect } from 'react'
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';
import { toast } from 'react-toastify';

const Cart = () => {

  const { products, cartItems, currency, removeFromCart, modifyCart } = useContext(ShopContext);

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

          if (!product) {
            return (
              <div key={index} className="py-4 border-t border-b text-gray-700">
                <p>Product not found.</p>
                <button onClick={() => removeFromCart(item._id, item.size)} className='text-sm text-red-500 border border-red-500 rounded px-3 py-1 hover:bg-red-500 hover:text-white'>Remove</button>
              </div>
            );
          }

          return (
            <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] gap-4 items-center">
              <div className="flex items-start gap-6">
                <img src={product.image && product.image.length > 0 ? product.image[0] : ''} alt='productimage' className="w-16 sm:w-20" />
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
              <div className='flex items-center gap-2 justify-end'>
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={e => modifyCart(item._id, item.size, Number(e.target.value))}
                  className="hover:cursor-pointer hover:bg-slate-100 max-w-10 sm:max-w-20 px-1 text-center border rounded"
                />
                <img onClick={() => removeFromCart(item._id, item.size)} className='cursor-pointer w-4 mr-4 sm:w-5 hover:scale-110 hover:bg-red-500 hover:py-1 hover:rounded' src={assets.bin_icon} alt="binicon" />
              </div>
            </div>
          )
        })
       }
     </div>

     <div className='flex justify-end my-20'>
       <div className='w-full sm:w-[450px]'>
         <CartTotal />
         <div className='w-full text-end'>
           <button className='bg-black text-white text-sm my-8 px-8 py-3 rounded '>PROCEED TO CHECKOUT</button>
         </div>
       </div>
     </div>

    </div>
  )
}

export default Cart
