import axios from "axios";

axios.defaults.baseURL = `http://localhost:3522/api/`;
axios.defaults.headers.post["Content-Type"] = "application/json";
export default axios;
