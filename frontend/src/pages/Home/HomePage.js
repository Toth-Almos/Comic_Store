import React, { useEffect, useReducer } from 'react'
import { getAll, search } from '../../services/ComicService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import Search from '../../components/Search/Search'
import { useParams } from 'react-router-dom';

const initialState = { comics: [] };

const reducer = (state, action) => {
    switch(action.type){
        case 'COMICS_LOADED':
            return {...state, comics: action.payload };
        default:
            return state;
    }
}

export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { comics } = state;
    const { searchTerm } = useParams();

    useEffect(() => {
        //Promise:
        const loadedComics = searchTerm? search(searchTerm) : getAll();
        //we can use .then on promises:
        loadedComics.then(comics => dispatch({type: 'COMICS_LOADED', payload: comics }));
    }, [searchTerm]);

    return (
    <>
        <Search/>
        <Thumbnails comics={comics} />
    </>
  )
}
