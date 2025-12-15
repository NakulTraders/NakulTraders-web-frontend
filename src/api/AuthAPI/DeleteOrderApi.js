import axios from "axios";
import { API_URL, DeleteOrder } from "../NwConfig";

export default async function DeleteOrderAPi(id){
    try{
        const url=API_URL+DeleteOrder+id
        const res=await axios.get(url)
        const resp=res.data
        return resp

    }catch(error){
        console.log(error)
        return error
    }
}