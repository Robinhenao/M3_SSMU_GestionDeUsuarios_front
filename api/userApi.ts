import axios from "axios";

export const userApi = axios.create({
    baseURL:"m3ssmugestiondeusuarios-production.up.railway.app"
})