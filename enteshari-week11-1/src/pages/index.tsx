import {Banner, FeaturedCategories, IconBox, MiniProductSlider, Section, SimpleProductSlider} from "@/components";
import {PopularProductsMock} from "@/mocks/PopularProductsMock";
import {PopularFruitsMock} from "@/mocks/PopularFruitsMock";


export default function Home() {
  return (
  <>
    <Section>
      <Banner
          title={'Don’t miss amazing grocery deals'}
          subTitle={'Sign up for the daily newsletter'}
          bgImage={'/assets/images/banner_bg.png'}
          Image={'/assets/images/fresh-apples.png'}

      />
    </Section>


    <Section>
      <div className="hidden sm:flex mb-[50px]">
        <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
      </div>
      <FeaturedCategories/>
    </Section>

    <Section>
      <MiniProductSlider/>
    </Section>

    <Section className={'mb-[68px]'}>
      <div className="flex justify-between mb-[50px]">
        <h2 className="text-heading3 text-blue-300">Popular Products</h2>
        <div className="flex items-center gap-3">
          <IconBox icon={'swiper-nav-left icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white'} size={24} />
          <IconBox icon={'swiper-nav-right icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white'} size={24} />
        </div>
      </div>

      <SimpleProductSlider sliderData={PopularProductsMock} nextEl={'.swiper-nav-left'} prevEl={'.swiper-nav-right'}/>
    </Section>

    <Section className={'mb-[68px]'}>
      <div className="flex justify-between mb-[50px]">
        <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
        <div className="flex items-center gap-3">
          <IconBox icon={'swiper-nav-left2 icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white'} size={24} />
          <IconBox icon={'swiper-nav-right2 icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white'} size={24} />
        </div>
      </div>

      <SimpleProductSlider sliderData={PopularFruitsMock} prevEl={'.swiper-nav-left2'} nextEl={'.swiper-nav-right2 '}/>
    </Section>

  </>
  );
}
