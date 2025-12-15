import axios from "axios";
import { API_URL, CreateCustomizeOrder } from "../NwConfig";

export default async function CreateCustomizeOrderApi(form){
    try{
        const url=API_URL+CreateCustomizeOrder
        const res=await axios.post(url,form)
        const resp=res.data
        return resp

    }catch(error){
        console.log(error)
        return error
    }
}