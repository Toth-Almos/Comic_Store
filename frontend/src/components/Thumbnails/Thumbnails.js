import React from 'react';
import {Link} from 'react-router-dom';
import classes from './thumbnails.module.css';

export default function Thumbnails({ comics }) {
  return (
    <ul className={classes.list}>
      {comics.map(comic => (
        <li key={comic.id}>
            <Link to={`/comic/${comic.id}`}>
                <img className={classes.image} src={`/comics/${comic.imageUrl}`} alt={comic.name} />
            
                <div className={classes.content}>
                    <div className={classes.name}>{comic.name}</div>
                    <div className={classes.product_item_footer}>
                        <div className={classes.release}>{comic.releaseYear}</div>
                        <div className={classes.creators}>
                            {comic.creators.map(creator => (
                                <span key={creator}>{creator} | </span>
                            ))}
                        </div>
                    </div>
                    <div className={classes.price}>EUR {comic.price}</div>
                </div>
            </Link>
        </li>
      ))}
    </ul>
  );
}
