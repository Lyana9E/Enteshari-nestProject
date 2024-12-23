import {ImageView, Rating} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    data:EntityType<ProductType>
    // data:{
    //     imgSrc:string;
    //     title:string;
    //     rate:number;
    //     price:number;
    //     sale_price?:number;
    // }

}

export function MiniProductCard({data}: Props) {
    return (
            <div className="flex gap-3 lg:gap-5">
                <ImageView height={120} src={data.attributes.thumbnail?.data?.attributes.url} alt={'product image'} width={120}/>
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="text-heading6 text-blue-300 mb-1">{data.attributes.title}</div>
                     <Rating ratingNumber={data.attributes.rate}/>
                    </div>
                    {
                        data.attributes.sell_price ?
                            <div>
                                <span className="text-heading5 text-green-200">${data.attributes.sell_price}</span>
                                <span
                                    className="text-heading-sm line-through text-gray-500">${data.attributes.price}</span>
                            </div>
                            :
                            <span className="text-heading5 text-green-200">${data.attributes.price}</span>
                    }
                </div>
            </div>

    );
};