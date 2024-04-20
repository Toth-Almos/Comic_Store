import { sample_data } from "../data";

export const getAll = async () => sample_data;

export const search = async (searchTerm) => sample_data.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()));