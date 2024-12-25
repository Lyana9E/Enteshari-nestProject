import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductDealsCard} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    sliderData:Array<EntityType<ProductType>>

}

export function DealsOfTheDaySlider({sliderData}: Props) {
    return (
        <div>
            <Swiper
                modules={[Autoplay]}

                spaceBetween={16}
                slidesPerView={1}


                breakpoints={
                    {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 18
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 22
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 22
                        }
                    }
                }

                autoplay={true}
            >

                {
                    sliderData.map((sliderItem:EntityType<ProductType>, index:number) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProductDealsCard data={sliderItem}/>

                            </SwiperSlide>


                        )
                    })
                }


            </Swiper>
        </div>

    );
};