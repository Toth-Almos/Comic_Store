import React, { useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllOrdersForUser, getAllLinesForOrder } from '../../services/OrderService';
import { getById } from '../../services/ComicService';
import classes from './ordersPage.module.css';
import Title from '../../components/Title/Title';

const initialState = { orders: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'ORDERS_FETCHED':
          return { ...state, orders: action.payload };
        default:
          return state;
    }
};

export default function OrdersPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { orders } = state;
  const [orderLines, setOrderLines] = useState([]);
  const [productNames, setProductNames] = useState({});
  const [selectedOrderId, setSelectedOrderId] = useState(null);


  useEffect(() => {
    const response = getAllOrdersForUser(localStorage.getItem("userId"));
    response.then(orders => dispatch({ type: 'ORDERS_FETCHED', payload: orders }));
  }, []);


  async function fetchProductNames(productIds) {
    const names = {};
    for(const id of productIds) {
        const item = await getById(id);
        names[id] = item.name;
    }
    setProductNames(names);
  }

  async function fetchOrderLines(shopOrderId) {
    const items = await getAllLinesForOrder(shopOrderId);
    setOrderLines(prevState => ({
        ...prevState,
        [shopOrderId]: items
    }));
    const itemIds = items.map(item => item.productId);
    fetchProductNames(itemIds);
  }

  function handleShowItems(shopOrderId) { 
    setSelectedOrderId(shopOrderId);
    fetchOrderLines(shopOrderId);
 }

  function writeOutItems(shopOrderId) {
    if(shopOrderId === selectedOrderId) {
        const items = orderLines[shopOrderId] || [];
        return items.map(item => (
            <li key={item.id}>{productNames[item.productId]}: x{item.quantity}</li>
        ));
    } else {
        return [];
    }
  }

  return (
    <div className={classes.container}>
      <Title title="Orders" margin="1.5rem 0 0 .2rem" fontSize="1.9rem" />
    
      {orders?.length === 0 && (
        <h1>You don't have any orders yet.</h1>
      )}

      {orders &&
        orders.map(order => (
          <div key={order.id} className={classes.order_summary}>
            <div className={classes.header}>
              <span>{order.orderDate}</span>
              <span>{order.status}</span>
            </div>
            <div className={classes.items}>
                <ul>
                    {writeOutItems(order.id)}
                </ul>
            </div>
            <div className={classes.footer}>
              <div>
                <button onClick={() => handleShowItems(order.id)}>Show Items</button>
              </div>
              <div>
                <span className={classes.price}> {order.totalPrice} EUR </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}