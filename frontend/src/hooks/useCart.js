import React, { children, createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);
const CART_KEY = 'cart';
const EMPTY_CART = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
};

export default function CartProvider({ children }) {
    const initCart = getCartFromLocalStorage();
    const [cartItems, setCartItems] = useState(initCart.items);
    const [totalPrice, setTotalPrice] = useState(initCart.totalPrice);
    const [totalCount, setTotalCount] = useState(initCart.totalCount);

    useEffect(() => {
        const totalPrice = sum(cartItems.map(item => item.price));
        const totalCount = sum(cartItems.map(item => item.quantity));

        setTotalPrice(totalPrice.toFixed(2));
        setTotalCount(totalCount);

        localStorage.setItem(CART_KEY, JSON.stringify({
            items: cartItems,
            totalPrice,
            totalCount,
        }));
    }, [cartItems]);

    function getCartFromLocalStorage() {
        const storedCart = localStorage.getItem(CART_KEY);
        return storedCart ? JSON.parse(storedCart) : EMPTY_CART;
    }

    //sum helper function:
    const sum = (items) => {
        const sum = items.reduce((prevValue, curValue) => prevValue = parseFloat(prevValue) + parseFloat(curValue), 0);
        return sum;
    }

    //to remove from cart:
    const removeFromCart = (comicId) => {
        const filteredCartItems = cartItems.filter(item => item.comic.id !== comicId);
        setCartItems(filteredCartItems);
    };
    //to change quantity:
    const changeQuantity = (cartItem, newQuantity) => {
        const { comic } = cartItem;
        const changedCartItem = {
            ...cartItem,
            quantity: newQuantity,
            price: (comic.price * newQuantity).toFixed(2),
        };

        setCartItems(
            cartItems.map(item => (item.comic.id === comic.id? changedCartItem : item))
        );
    };
    //to add to cart:
    const addToCart = (comic) => {
        const cartItem = cartItems.find(item => item.comic.id === comic.id);
        if(cartItem) {
            changeQuantity(cartItem, cartItem.quantity + 1);
        }
        else {
            setCartItems([...cartItems, { comic, quantity: 1, price: comic.price}]);
        }
    }

    return <CartContext.Provider 
    value={{
        cart: { items: cartItems, totalPrice, totalCount }, 
        removeFromCart,
        changeQuantity,
        addToCart,
    }}
    >
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext);