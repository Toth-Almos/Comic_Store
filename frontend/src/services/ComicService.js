import api from './axiosConfig';

export const getAll = async () => {
    const response = await api.get('api/v1/comics');
    return response.data;
};

/*
export const search = async searchTerm => {
    const response = await api.get('comics/' + searchTerm);
    return null;
}


export const getById = async productId => {
    const response = await api.get('comic/' + productId);
    return response.data;
};
*/
