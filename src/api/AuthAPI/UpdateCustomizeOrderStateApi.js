import axios from "axios";
import { API_URL, UpdateCustomizeOrderState } from "../NwConfig";

export default async function UpdateCustomizeOrderStateApi(id,data){
    try{
        
        const url=API_URL+UpdateCustomizeOrderState+id
        console.log("===== url",url);
        
        const res=await axios.patch(url , data)
        const resp=res.data
        return resp

    }catch(error){
        console.log(error)
        return error
    }
}