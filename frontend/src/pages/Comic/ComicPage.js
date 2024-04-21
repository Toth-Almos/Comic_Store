import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getById } from '../../services/ComicService';
import classes from './comicPage.module.css';
import { useCart } from '../../hooks/useCart';

export default function ComicPage() {
    const [comic, setComic] = useState({});
    const {id} = useParams();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(comic);
        navigate('/cart');
    };

    useEffect(() => {
        getById(id).then(setComic);
    }, [id]);

    return (
        <>
        { comic && <div className={classes.container}>
            <img className={classes.image} src={`/comics/${comic.imageUrl}`} alt={comic.name} />
            <div className={classes.details}>
                <div className={classes.header}>
                    <span className={classes.name}>{comic.name}</span>
                </div>
                
                <div className={classes.release}>Release year: {comic.releaseYear}</div>

                <div className={classes.studio}>Studio: {comic.studio}</div>

                <div className={classes.creators}>
                    <span>Created by: </span> 
                    {comic.creators?.map(c => (
                        <span key={c}>{c} | </span>
                    ))}
                </div>
                
                <div className={classes.price}>EUR {comic.price}</div>

                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div> }
        </>
    )
}
