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

export const deleteById = async (productId) => {
    const response = await api.delete('api/v1/comics/delete/' + productId);
    return response;
}

export const addNewComic = async (comic) => {
    const { data } = await api.post('api/v1/comics/add');
    return data;
}

export const updateComic = async (comic) => {
    const { data } = await api.put('/api/v1/comics/' + comic.id);
    return data;
}