import { sample_data } from "../data";
import axios from "axios";

export const getAll = async () => {
    const { comics } = await axios.get('http://localhost:8080/comic/getAll');
    return comics;
};

export const search = async (searchTerm) => sample_data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

export const getById = async (comicId) => sample_data.find(item => item.id === comicId);
