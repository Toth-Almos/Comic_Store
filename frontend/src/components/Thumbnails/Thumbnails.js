import React from 'react';
import {Link} from 'react-router-dom';
import classes from './thumbnails.module.css';

export default function Thumbnails({ comics }) {
  return (
    <ul className={classes.list}>
      {comics && comics.map(comic => (
        <li key={comic.id}>
            <Link to={`/comic/${comic.id}`}>
                <img className={classes.image} src={`/comics/comic_` + comic.id + `.jpg`} alt={comic.name} />
            
                <div className={classes.content}>
                    <div className={classes.name}>{comic.name}</div>
                    <div className={classes.release}>{comic.releaseYear}</div>
                    <div className={classes.price}>EUR {comic.price}</div>
                </div>
            </Link>
        </li>
      ))}
    </ul>
  );
}
