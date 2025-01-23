import apiClient from "@/api/config/ApiClient";
import {AuthResponseType} from "@/types/api/Auth";

interface RegisterData {
    "username": string,
    "email": string,
    "password": string
}

interface LoginDate {
    identifier: string;
    password: string;

}

export function RegisterApiCall(data:RegisterData):Promise<AuthResponseType>{

    return apiClient.post('/auth/local/register',data);

}


export function LoginApiCall(data:LoginDate):Promise<AuthResponseType>{

    return apiClient.post('/auth/local',data);

}