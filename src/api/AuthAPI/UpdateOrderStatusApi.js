import axios from "axios";
import { API_URL, updateOrderStatus } from "../NwConfig";

export default async function updateOrderStatusApi(id,data){
    try{
        const url=API_URL+updateOrderStatus+id
        const res=await axios.patch(url , data)
        const resp=res.data
        return resp

    }catch(error){
        console.log(error)
        return error
    }
}