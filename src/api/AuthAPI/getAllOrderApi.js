import axios from "axios";
import { API_URL, getAllOrder } from "../NwConfig";

export default async function getAllOrderApi(){
    try{
        const url=API_URL+getAllOrder
        // const res=await axios.post(url,form,{withCredentials:true})
        const res=await axios.get(url)
        const resp=res.data
        return resp

    }catch(error){
        console.log(error)
        return error
    }
}