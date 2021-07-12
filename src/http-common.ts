import axios from "axios";
import Env  from "../EnvConfig"
export default axios.create({
    baseURL: Env.baseUrl,
    headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
});