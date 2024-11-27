import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductDealsCard, SimpleProductCard} from "@/components";
import {DealsOfTheDaysMock} from "@/mocks/DealsOfTheDaysMock";

interface Props {
    sliderData:Array<any>

};

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
                    sliderData.map((sliderItem, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProductDealsCard sliderItem={sliderItem}/>

                            </SwiperSlide>


                        )
                    })
                }


            </Swiper>
        </div>

    );
};