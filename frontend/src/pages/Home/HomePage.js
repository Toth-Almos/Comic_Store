import React, { useEffect, useReducer, useState } from 'react'
import { getAll, search } from '../../services/ComicService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import Search from '../../components/Search/Search'
import { useParams } from 'react-router-dom';

//const initialState = { comics: [] };

//const reducer = (state, action) => {
//    switch(action.type){
//        case 'COMICS_LOADED':
//            return {...state, comics: action.payload };
//        default:
//            return state;
//    }
//}

export default function HomePage() {
    //const [state, dispatch] = useReducer(reducer, initialState);
    //const { comics } = state;
    const { searchTerm } = useParams();
    const [ comics, setComics ] = useState([]);

    useEffect(() => {
        const fetchComics = async () => {
            const allComics = await getAll();
            setComics(allComics);
        }
        fetchComics();
    });


    //useEffect(() => {
        //Promise:
    //    const loadedComics = searchTerm? search(searchTerm) : getAll();
        //we can use .then on promises:
    //    loadedComics.then(comics => dispatch({type: 'COMICS_LOADED', payload: comics }));
    //}, [searchTerm]);

    //useEffect(() => {
    //    fetch("http://localhost:8080/comic/getAll")
    //    .then(res => res.json())
    //    .then((result) => {
    //        console.log(result);
    //        setComics(result);
    //        console.log(comics);
    //    })
    //    .catch(rejected => {
    //        console.log("rejected!!!");
    //    })
    //},[comics])



    return (
    <>
        <Search/>
        <Thumbnails comics={comics} />
    </>
  )
}
