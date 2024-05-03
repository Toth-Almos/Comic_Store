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
        alert(data + " Thank you for your purchase!");
    }
    return data;
};

export const createOrderLine = async (order) => {
    //TODO
}