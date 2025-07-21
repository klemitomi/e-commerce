import { createContext, useEffect } from "react";
import { products } from "../assets/frontend_assets/assets"; 
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props)=> {

    const currency = '$'; // Hungarian Forint
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState(() => {
      const stored = localStorage.getItem('cartItems');
      return stored ? JSON.parse(stored) : {};
    });
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Please select a size before adding to cart!');
            return;
    } 

      let cartData = structuredClone(cartItems);
      
      if (cartData[itemId]) {
        if (cartData[itemId][size]) {
          cartData[itemId][size] += 1;
        } else {
          cartData[itemId][size] = 1;
        }
      } else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;       
      }

        setCartItems(cartData);
    } 


    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for(const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[iemId][size] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    console.error('Error calculating cart amount:', error);
                }
            } 
        }
        return totalAmount;
    }

    // Remove item from cart by itemId and size
    const removeFromCart = (itemId, size) => {
        if (window.confirm('Do you really want to remove this item from the cart?')) {
            let cartData = structuredClone(cartItems);
            if (cartData[itemId] && cartData[itemId][size]) {
                cartData[itemId][size] -= 1;
                if (cartData[itemId][size] <= 0) {
                    delete cartData[itemId][size];
                }
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
                toast.success('Item removed from cart');
            }
            setCartItems(cartData);
        }
    };

    // Modify item in cart by itemId and size
    const modifyCart = (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        if (!cartData[itemId]) cartData[itemId] = {};
        if (quantity > 0) {
            cartData[itemId][size] = quantity;
            toast.success('Quantity updated!');
        } else {
            // Ha 0 vagy kevesebb, töröljük a méretet (és ha kell, a terméket is)
            delete cartData[itemId][size];
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
            toast.info('Item removed from cart');
        }
        setCartItems(cartData);
    };

    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, setCartItems, addToCart, getCartCount, removeFromCart,
        modifyCart, getCartAmount, updateQuantity,
        navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
