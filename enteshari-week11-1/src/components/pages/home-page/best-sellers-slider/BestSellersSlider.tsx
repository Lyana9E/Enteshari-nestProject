import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {SimpleProductCard} from "@/components";

interface Props {
    sliderData:Array<any>
    
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
                    sliderData.map((sliderItem, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <SimpleProductCard sliderItem={sliderItem}/>
                            </SwiperSlide>


                        )
                    })
                }


            </Swiper>
        </div>
    );
}