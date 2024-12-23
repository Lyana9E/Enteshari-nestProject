import apiClient from "@/api/config/ApiClient";
import {ProductType} from "@/types/api/Product";
import {ApiResponseType} from "@/types";


interface  Props{
    populate?: Array<'categories' | 'thumbnail' | 'gallery'>,
    filters?:{
        is_popular?:boolean,
        is_popular_fruit?:boolean
    }
}
interface Filters{
    is_popular?:{
        $eq:boolean
    }
    is_popular_fruit?:{
        $eq:boolean
    }

}


export function getAllProductsApiCall ({populate,filters}:Props):Promise<ApiResponseType<ProductType>>{
    const customFilter:Filters ={}
    if(filters?.is_popular){
        customFilter.is_popular ={
            $eq:filters.is_popular,
        }
    }

    if(filters?.is_popular_fruit){
        customFilter.is_popular_fruit ={
            $eq:filters.is_popular_fruit
        }
    }

    return  apiClient.get('/products',{
        params:{
            populate:populate?.join(','),

            filters: customFilter,
        }
    })
}