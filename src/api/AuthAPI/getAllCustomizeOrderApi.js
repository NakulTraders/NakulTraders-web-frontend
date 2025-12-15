import axios from "axios";
import { API_URL, getAllCustomizeOrder } from "../NwConfig";

export default async function getAllCustomizeOrderApi(){
    try{
        const url=API_URL+getAllCustomizeOrder
        // const res=await axios.post(url,form,{withCredentials:true})
        const res=await axios.get(url)
        const resp=res.data
        // console.log("responce in AuthApi :",resp);
        
        return resp

    }catch(error){
        console.log(error)
        return error
    }
}