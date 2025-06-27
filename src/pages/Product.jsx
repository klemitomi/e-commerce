import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { products, assets } from '../assets/frontend_assets/assets'; 
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  
  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id == productId) {
        setProductData(item)
        setImage(item.image[0]);
        return null;
      }
    });
  }
    
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);


  return productData ? (
    <>
    <div className="border-t-2 pt-10 transition-opacity duration-500 opacity-100">
      {/* Product Details */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        
      {/* Product Image */}
      <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
      <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
        {productData.image.map((item, index) => (
          <img onClick={() => setImage(item)} key={index} src={item} alt={productData.name} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"  />
        ))}
      </div>
      <div className='w-full sm:w-[80%]'>
        <img className='w-full height-auto' src={image} alt="image" />
      </div>
      </div>
      </div>
      {/* Product Info */}
      <div className="flex-1">
        <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <img src={assets.star_icon} alt="staricon" className="w-3 5" />
          <img src={assets.star_icon} alt="staricon" className="w-3 5" />
          <img src={assets.star_icon} alt="staricon" className="w-3 5" />
          <img src={assets.star_icon} alt="staricon" className="w-3 5" />
          <img src={assets.star_dull_icon} alt="stardullicon" className="w-3 5" />
        </div>
        <p className="pl-2">(122)</p>
      </div>
        <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
        <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
        <div className="flex flex-col gap-4 my-8">
          <p>Select Size</p>
          <div className="flex gap-2">
            {productData.sizes.map((item, index) => (
              <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>    
            ))}
          </div>
        </div>
        <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
        <hr  className="mt-8 sm:w-4/5"/>
        <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
        </div>
    </div>
    <div>
      {/*Description & Reviews*/}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>An e-commerce website is an online platform that allows customers to buy and sell products or services over the internet.</p>
          <p> E-commerce websites typically display products or services along whith detailed descriptions, images, and pricing information. Customers can browse through the website, add items to their shopping cart, and proceed to checkout for payment.</p>
        </div>
      </div>

      {/*Display related products*/}
      <RelatedProducts category={productData.category} subcategory={productData.subcategory}/>
    </div>
    </>
  ) : <div className="opacity-0"></div>
}

export default Product
