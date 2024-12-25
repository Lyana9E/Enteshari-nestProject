import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {SimpleProductCard} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";


interface Props {
    sliderData: Array<EntityType<ProductType>>;
    prevEl: string;
    nextEl: string;

}

export function SimpleProductSlider({sliderData, nextEl, prevEl}: Props) {
    return (
        <div>
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation={{
                    prevEl: prevEl,
                    nextEl: nextEl
                }}

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

                autoplay={true}
            >
                {
                    sliderData.map((sliderItem, index) => {
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