import api from './axiosConfig'

export const createOrder = async (order) => {
    const { data } = await api.post('api/v1/shop_order/create', {
        userId: localStorage.getItem('userId'),
        shippingAddress: order.shippingAddress,
        orderDate: Date.now(),
        totalPrice: order.totalPrice,
        status: "Under process",
    });
    if(data) {
        alert("Thank you for your purchase! ShopOrderId: " + data);
    }
    return data;
};

export const createOrderLine = async (item, shopOrderId) => {
    const { data } = await api.post('api/v1/order_line/create', {
        shopOrderId: shopOrderId,
        productId: item.id,
        quantity: item.quantity,
    });
    if(data) {
        console.log(data);
    }
    return data;
}

export const getAllOrdersForUser = async (userId) => {
    const { data } =  await api.get('api/v1/shop_order/orders', {
        params: { userId: userId }
    });
    return data;
}

export const getAllLinesForOrder = async (shopOrderId) => {
    const { data } = await api.get('api/v1/order_line/get_for_shop_order', {
        params: { shopOrderId: shopOrderId }
    });
    console.log(data);
    return data;
}