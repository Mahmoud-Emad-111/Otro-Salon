import axios from "axios";
const http=axios.create({
        baseURL:'https://otrosalon.com/otrosalon-dashboard.com/public/api/',
        headers:{
            'X-Requested-With':'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin':'*',
            'mode': 'no-cors',
        },
        // responseType:'json',
        withCredentials:false
        
    });
export  default http ;     