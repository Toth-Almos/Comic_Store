import React, { useEffect, useReducer } from 'react'
import { getAll, search } from '../../services/ComicService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import Search from '../../components/Search/Search'
import { useParams } from 'react-router-dom';

const initialState = { products: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'PRODUCTS_LOADED':
            return { ...state, products: action.payload };
        default:
             return state;
    }
};

export function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { products } = state;
    const { searchTerm } = useParams();

    useEffect( () => {
        const loadProducts = searchTerm ? search(searchTerm) : getAll();
        loadProducts.then(products => dispatch({ type: 'PRODUCTS_LOADED', payload: products }));
    }, [searchTerm]);

    return (
    <>
        <Search/>
        <Thumbnails comics = { products } />
    </>
  );
}
