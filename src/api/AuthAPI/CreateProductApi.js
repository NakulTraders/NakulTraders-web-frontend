import axios from "axios";
import { API_URL, CreateProduct } from "../NwConfig";

export default async function CreateProductApi(form){
    try{
        const url=API_URL+CreateProduct
        // const res=await axios.post(url,form,{withCredentials:true})
        const res=await axios.post(url,form)
        const resp=res.data
        return resp

    }catch(error){
        console.log(error)
        return error
    }
}