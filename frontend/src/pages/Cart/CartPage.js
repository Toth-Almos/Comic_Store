import React from 'react';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import classes from './cartPage.module.css';

export default function CartPage() {
  
    const { cart, removeFromCart, changeQuantity } = useCart();
  
    return <>
        <Title title="Cart Page" margin="1.5rem 0 0 2.5rem"></Title>

        {cart && cart.items.length > 0 &&
            <div className={classes.container}>
                <ul className={classes.list}>
                    {cart.items.map(item => <li key={item.comic.id}>
                        <div>
                            <img src={`/comics/${item.comic.imageUrl}`} alt={item.comic.name} />
                        </div>
                        <div>
                            <Link to={`/comic/${item.comic.id}`}>{item.comic.name}</Link>
                        </div>
                        <div>
                            <select value={item.quantity} onChange={e =>changeQuantity(item, Number(e.target.value))}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                        <div>EUR {item.price}</div>
                        <div>
                            <button onClick={() => removeFromCart(item.comic.id)} className={classes.remove_button}>Remove</button>
                        </div>
                    </li>)}
                </ul>

                <div className={classes.checkout}>
                    <div>
                        <div className={classes.comic_count}>Count: {cart.totalCount}</div>
                        <div className={classes.total_count}>Price: EUR {cart.totalPrice}</div>
                    </div>
                    <Link to="/checkout">Proceed To Checkout</Link>
                </div>
            </div>
        }
    </>
}
