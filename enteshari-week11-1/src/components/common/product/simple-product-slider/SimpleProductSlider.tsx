import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay , Navigation} from "swiper/modules";
import { SimpleProductCard} from "@/components";


interface Props{
    sliderData:Array<any>;
    nextEl?:string ;
    prevEl?:string;
}

export function SimpleProductSlider({sliderData , nextEl , prevEl}:Props) {
    return (
        <div>
            <Swiper
                modules={[Autoplay , Navigation]}

                spaceBetween={16}
                slidesPerView={2}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 22
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 24
                    }
                }}
                navigation={{nextEl:nextEl, prevEl:prevEl}}
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