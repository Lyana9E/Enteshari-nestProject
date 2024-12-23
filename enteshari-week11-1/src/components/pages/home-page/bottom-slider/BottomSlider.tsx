import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductVerticalList} from "@/components";

import {useQuery} from "@tanstack/react-query";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {getAllProductsApiCall} from "@/api/Product";


export function BottomSlider() {


    const {data: TopRateData} = useQuery<ApiResponseType<ProductType>>({
        queryKey: [getAllProductsApiCall.name, 'topRateProduct'],
        queryFn: () => getAllProductsApiCall(
            {
                populate: ['thumbnail'],
                sort: ['rate:desc'],
                pagination: {
                    page: 1,
                    pageSize: 3,
                    withCount: false,
                }

            })
    })

    const {data: trendingProductsData} = useQuery<ApiResponseType<ProductType>>({
        queryKey: [getAllProductsApiCall.name, 'trendingProduct'],
        queryFn: () => getAllProductsApiCall({
            populate: ['thumbnail']
            , filters: {is_trending: {$eq: true}},
            pagination: {
                page: 1,
                pageSize: 3,
                withCount: false,
            }
        })
    })

    const {data: topSellingProductsData} = useQuery<ApiResponseType<ProductType>>({
        queryKey: [getAllProductsApiCall.name, 'topSellingProduct'],
        queryFn: () => getAllProductsApiCall({
            populate: ['thumbnail']
            , filters: {is_top_selling: {$eq: true}},
            pagination: {
                page: 1,
                pageSize: 3,
                withCount: false,
            }
        })
    })


    return (
        <div>
            <Swiper
                modules={[Autoplay]}

                spaceBetween={16}
                slidesPerView={1}


                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 18
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 22
                    }
                }}

                autoplay={true}
            >

                <SwiperSlide>
                    {topSellingProductsData &&
                        <ProductVerticalList title={'Top Selling'} data={topSellingProductsData.data}/>}
                </SwiperSlide>


                <SwiperSlide>
                    {trendingProductsData &&
                        <ProductVerticalList title={'Trending Products '} data={trendingProductsData.data}/>}

                </SwiperSlide>
                {/*<SwiperSlide>*/}
                {/*    <ProductVerticalList title={'Recently Added'} data={RecentlyAdded}/>*/}

                {/*</SwiperSlide>*/}

                <SwiperSlide>
                    {TopRateData &&
                        <ProductVerticalList title={'Top Rated'} data={TopRateData.data}/>}
                </SwiperSlide>


            </Swiper>
        </div>

    );
};