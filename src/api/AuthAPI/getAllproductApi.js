import axios from "axios";
import { API_URL, getAllProduct } from "../NwConfig";

export default async function getAllProductApi(){
    try{
        const url=API_URL+getAllProduct
        // const res=await axios.post(url,form,{withCredentials:true})
        const res=await axios.get(url)
        const resp=res.data
        return resp

    }catch(error){
        console.log(error)
        return error
    }
}