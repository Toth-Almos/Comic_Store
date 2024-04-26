import api from './axiosConfig';

export const getAll = async () => {
    const response = await api.get('api/v1/comics');
    return response.data;
};


export const search = async (searchTerm) => {
    const response = await api.get('api/v1/comics/search/' + searchTerm);
    return response.data;
}


export const getById = async (productId) => {
    const response = await api.get('api/v1/comics/' + productId);
    return response.data;
};

