import {CategoryType} from "@/types/api/Category";
import {EntityType, PopulateType} from "@/types";
import {ImageType} from "@/types/api/Image";


export interface ProductType {
    title: string
    description: any
    quantity: number
    price: number
    sell_price?: number
    discount_expire_date?: string |null
    rate: number
    weight?: number
    is_popular: boolean
    is_top_selling: boolean
    is_trending: boolean
    SKU?: string
    label: string |null
    unit: string
    total: number|null
    sold: number|null
    is_popular_fruit?: boolean
    is_best_seller?: boolean
    thumbnail?: {
        data?:EntityType<ImageType>
    }
    gallery?: PopulateType<ImageType>
    categories?: PopulateType<CategoryType>
}












