import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {SimpleProductCard} from "@/components";
import {ProductType} from "@/types/api/Product";
import {EntityType} from "@/types";

interface Props {
    sliderData:Array<EntityType<ProductType>>
    
}

export function BestSellersSlider({sliderData}: Props) {
    return (
        <div>
            <Swiper
                modules={[Autoplay]}

                spaceBetween={16}
                slidesPerView={2}


                breakpoints={ {
                    768: {
                    slidesPerView: 3,
                    spaceBetween: 18
                },
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 22
                }
                }}

                autoplay={true}
            >

                {
                    sliderData.map((sliderItem:EntityType<ProductType>, index:number) => {
                        return (
                            <SwiperSlide key={index}>
                                <SimpleProductCard data={sliderItem}/>
                            </SwiperSlide>


                        )
                    })
                }


            </Swiper>
        </div>
    );
}