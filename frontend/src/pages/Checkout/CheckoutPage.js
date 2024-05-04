import React from 'react'
import classes from './checkoutPage.module.css'
import { useCart } from '../../hooks/useCart';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createOrder, createOrderLine } from '../../services/OrderService';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';

export default function CheckoutPage() {
    const { cart, removeAllFromCart } = useCart();
    const { user } = useAuthentication();
    const navigate = useNavigate();
    //shallow copy of products in cart:
    const [order, setOrder] = useState({...cart});

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const submit = async (data) => {
        const shopOrderId = await createOrder({ ...order, username: data.username, shippingAddress: data.shippingAddress});
        await cart.items.map(item => createOrderLine(item, shopOrderId));
        removeAllFromCart();
        navigate('/');
    } 

   return(
    <>
      <form onSubmit={handleSubmit(submit)} className={classes.container}>
        <div className={classes.content}>
          <Title title="Please fill out this form to place your order" fontSize="1.6rem" />
          <div className={classes.inputs}>
            <Input
              defaultValue={user.name}
              label="Username"
              {...register('username', {
                required: true,
              })}
              error={errors.name}
            />
            <Input
              defaultValue={user.address}
              label="Address"
              {...register('shippingAddress', {
                required: true,
              })}
              error={errors.address}
            />
          </div>
        </div>

        <div className={classes.buttons_container}>
          <div className={classes.buttons}>
            <button type='submit'>Place Order</button>
          </div>
        </div>
      </form>  
    </>
   );
}
