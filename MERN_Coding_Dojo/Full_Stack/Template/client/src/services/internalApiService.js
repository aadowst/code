import axios from 'axios';


const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});

const MODEL = "model-name"

export const createModel = async (data) => {
    const res = await http.post(`/${MODEL}s`, data);
    return res.data;
}

export const getAllModels = async () => {
    const res = await http.get(`/${MODEL}s`);
    return res.data;
}

export const getModelById  = async (id) => {
    const res = await http.get(`/${MODEL}s/${id}`);
    return res.data;
}

export const updateModelById  = async (id, data) => {
    const res = await http.put(`/${MODEL}s/${id}`, data);
    return res.data;
}

export const deleteModelById  = async (id) => {
    const res = await http.delete(`/${MODEL}s/${id}`);
    return res.data;
}