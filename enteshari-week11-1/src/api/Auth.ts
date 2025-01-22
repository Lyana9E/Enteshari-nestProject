import apiClient from "@/api/config/ApiClient";
import {RegisterResponseType} from "@/types/api/Auth";

interface Data {
    "username": string,
    "email": string,
    "password": string
}


export function RegisterApiCall(data:Data):Promise<RegisterResponseType>{

    return apiClient.post('/auth/local/register',data)


}