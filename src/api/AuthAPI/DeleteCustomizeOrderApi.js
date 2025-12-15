import axios from "axios";
import { API_URL, DeleteCustomizeOrder } from "../NwConfig";

export default async function DeleteCustomizeOrderApi(id){
    try{
        const url=API_URL+DeleteCustomizeOrder+id
        const res=await axios.get(url)
        const resp=res.data
        return resp

    }catch(error){
        console.log(error)
        return error
    }
}