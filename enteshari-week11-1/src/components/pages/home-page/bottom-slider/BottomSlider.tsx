import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductVerticalList} from "@/components";
import {TopSelling} from "@/mocks/TopSelling";
import {TrendingProducts} from "@/mocks/TrendingProducts";
import {RecentlyAdded} from "@/mocks/RecentlyAdded";
import {TopRated} from "@/mocks/TopRated";

interface Props {
    
};

export function BottomSlider({}: Props) {
    return (
        <div>
            <Swiper
                modules={[Autoplay]}

                spaceBetween={16}
                slidesPerView={1}


                breakpoints={ {
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
                    <ProductVerticalList title={'Top Selling'} data={TopSelling}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductVerticalList title={'Trending Products '} data={TrendingProducts}/>

                </SwiperSlide>
                <SwiperSlide>
                    <ProductVerticalList title={'Recently Added'} data={RecentlyAdded}/>

                </SwiperSlide>
                <SwiperSlide>
                    <ProductVerticalList title={'Top Rated '} data={TopRated}/>

                </SwiperSlide>



            </Swiper>
        </div>

    );
};