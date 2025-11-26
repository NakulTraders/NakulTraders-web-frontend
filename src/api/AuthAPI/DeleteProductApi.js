import axios from "axios";
import { API_URL, DeleteProduct } from "../NwConfig";

export default async function DeleteProductApi(id){
    try{
        const url=API_URL+DeleteProduct+id
        const res=await axios.put(url)
        const resp=res.data
        return resp

    }catch(error){
        console.log(error)
        return error
    }
}