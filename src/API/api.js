import axios from 'axios'

export default axios.create({
    baseURL:"bcc-filkom-ub-elb-392908734.ap-southeast-1.elb.amazonaws.com:8082",
    header:{
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})