import {IconBox} from "@/components/common/ui/icon-box";
import {useForm} from "react-hook-form";
import {register} from "swiper/swiper-element";
import {useMutation} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/Product";
import {useEffect, useState} from "react";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
// TODO should implement search form

interface Props {
    inputClassName?:string;

}

interface formInput {
    search_text:string;

}

interface filterData{
    title : {
        $containsi  : string;

    }
}
export function SearchForm({inputClassName=''}:Props) {

    const [resultData , setResultData]=useState<Array<EntityType<ProductType>>>([])
  const {register,handleSubmit}=  useForm<formInput>()

    const mutation = useMutation({mutationFn:(data:filterData)=>getAllProductsApiCall({filters:data})})

    const onSubmit =(data:formInput)=>{
        console.log(data)
        mutation.mutate({

            title:{
                '$containsi': data.search_text
            }
        },{
            onSuccess: (response)=>{
                setResultData(response.data)

            }
            }
            )}


    useEffect(() => {
        if (mutation.isSuccess) {
            console.log('response', mutation.data);
        }
    }, [mutation.isSuccess, mutation.data]);
    return (
        <>
            <div className={'relative'}>
                <form name="search-form" onSubmit={handleSubmit(onSubmit)} action="#" method="post" className="flex items-center">
                    <input {...register('search_text')} type="text" placeholder="Search for items" className={`text-xsmall text-gray-400 border-gray-300 w-full  focus:outline-none ${inputClassName}`} />
                    <button type="submit">
                        <IconBox icon={'icon-search'} />
                    </button>
                </form>
                {
                    resultData &&
                    <div className={'absolute bg-white left-0 right-0 w-full top-14'}>
                        <ul>
                            {
                                resultData.map((item:EntityType<ProductType> , index:number)=>{
                                    return <li className={'p-4 hover:bg-green-200 hover:text-white cursor-pointer'}>{item.attributes.title}</li>
                                })
                            }
                        </ul>
                    </div>
                }
            </div>

        </>
    );
}

