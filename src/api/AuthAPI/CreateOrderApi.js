import axios from "axios";
import { API_URL, CreateOrder } from "../NwConfig";

export default async function CreateOrderApi(form){
    try{
        const url=API_URL+CreateOrder
        const res=await axios.post(url,form)
        const resp=res.data
        return resp

    }catch(error){
        console.log(error)
        return error
    }
}