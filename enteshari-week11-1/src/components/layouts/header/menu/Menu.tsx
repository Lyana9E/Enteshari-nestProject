import Link from "next/link";
import {IconBox} from "@/components/common/ui/icon-box";

export function Menu() {
    return (
        <>
            <div id="all_categories" className="flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
                <IconBox icon={'icon-apps'} link={'#'} size={24} title={'Browse All Categories'} titleClassName={'text-medium'}/>

                <IconBox icon={'icon-angle-small-down'} size={24}/>

                <div id="all_categories_box" className=" absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default">
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">


                        <IconBox icon={'icon-groceries-1'} title={'Milks and Dairies'} titleClassName={'text-heading-sm text-blue-300'} size={30} path={7} link={'#'} linkClass={'flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer'}/>
                        <IconBox icon={'icon-drinks-1'} title={'Wines & Drinks'} titleClassName={'text-heading-sm text-blue-300'} size={30} path={5} link={'#'} linkClass={'flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer'}/>
                        <IconBox icon={'icon-dress-1'} title={'Clothing & beauty'} titleClassName={'text-heading-sm text-blue-300'} size={30} path={4} link={'#'} linkClass={'flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer'}/>
                        <IconBox icon={'icon-crab-1'} title={'Fresh Seafood'} titleClassName={'text-heading-sm text-blue-300'} size={30} path={9} link={'#'} linkClass={'flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer'}/>
                        <IconBox icon={'icon-pet-food-1'} title={'Pet Foods & Toy'} titleClassName={'text-heading-sm text-blue-300'} size={30} path={8} link={'#'} linkClass={'flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer'}/>
                        <IconBox icon={'icon-sweet-1'} title={'Fast food'} titleClassName={'text-heading-sm text-blue-300'} size={30} path={7} link={'#'} linkClass={'flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer'}/>
                        <IconBox icon={'icon-dairy-products-1'} title={'Baking material'} titleClassName={'text-heading-sm text-blue-300'} size={30} path={5} link={'#'} linkClass={'flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer'}/>
                        <IconBox icon={'icon-grocery-1'} title={'Vegetables'} titleClassName={'text-heading-sm text-blue-300'} size={30} path={7} link={'#'} linkClass={'flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer'}/>
                        <IconBox icon={'icon-fruit-1'} title={'Fresh Fruit'} titleClassName={'text-heading-sm text-blue-300'} size={30} path={3} link={'#'} linkClass={'flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer'}/>
                        <IconBox icon={'icon-milk-products-1'} title={'Bread and Juice'} titleClassName={'text-heading-sm text-blue-300'} size={30} path={5} link={'#'} linkClass={'flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer'}/>










                        <div id="more_categories" className="cursor-pointer flex gap-4 items-center justify-center w-full mt-[17px]">
                            <i className="icon-add text-[24px]"></i>
                            <div className="text-heading-sm text-blue-300">More Categories</div>
                        </div>
                    </div>
                </div>



            </div>












            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
                    <li>
                        <Link href="#" className="flex flex-row gap-2 items-center">
                            <i className="icon-flame text-[24px]"></i>
                            <div className="text-heading6 lg:text-heading-sm xl:text-heading6">Hot Deals</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center gap-1">Home</Link>
                    </li>
                    <li>
                        <Link href="#" className="flex flex-row">Food</Link>
                    </li>
                    <li>
                        <Link href="#" className="flex flex-row">Vegetables</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

