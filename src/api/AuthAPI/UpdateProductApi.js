import axios from "axios";
import { API_URL, UpdateProduct } from "../NwConfig";

export default async function UpdateProductApi(id,data){
    try{
        const url=API_URL+UpdateProduct+id
        const res=await axios.patch(url , data)
        const resp=res.data
        return resp

    }catch(error){
        console.log(error)
        return error
    }
}