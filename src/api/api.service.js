import axios from "axios";

const ApiService = {
    
    endpoint: "https://localhost:44355/api/",

    post(url, data){

        axios.post(this.endpoint + url, data);
    },
};

export default ApiService;