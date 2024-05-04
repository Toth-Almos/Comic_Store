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