import Link from "next/link";
import {IconBox} from "@/components/common/ui/icon-box";
import {BrowsCategoryMock} from "@/mocks/BrowsCategoryMock";
import {MenuMock} from "@/mocks/MenuMock";
import {useQuery} from "@tanstack/react-query";
import {getMenuApiCall} from "@/api/Menu";

export function Menu() {
    const {data:menuData} =useQuery({queryKey:[getMenuApiCall.name],queryFn:()=> getMenuApiCall()})
   console.log(menuData)

    return (
        <>
            <div id="all_categories" className=" flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
                <IconBox icon={'icon-apps'} link={'#'} size={24} title={'Browse All Categories'} titleClassName={'text-medium'} linkClass={'gap-2'}/>

                <IconBox icon={'icon-angle-small-down'} size={24} />

                <div id="all_categories_box" className="hidden absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default">
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">

                        {BrowsCategoryMock.map((item,index)=>{
                            return(
                                <IconBox key={index} icon={item.icon} title={item.title} titleClassName={'text-heading-sm text-blue-300'} size={30} path={item.iconPath} link={item.link} linkClass={'gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300'}/>

                            )
                        })}
                        <IconBox icon={'icon-add'} linkClass={'gap-4 justify-center w-full mt-[17px]'} link={'#'} size={24} title={'More Categories'} titleClassName={'text-heading-sm text-blue-300'} />

                    </div>
                </div>

            </div>

            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">

                    {
                        MenuMock.map((item,index)=>{
                            return(
                                <li key={index}>
                                    {
                                        item.icon ? <IconBox {...item} titleClassName={'text-heading6 lg:text-heading-sm xl:text-heading6'} size={24} linkClass={'flex flex-row gap-2 items-center'} />
                                            :
                                            <Link href={item.link} className="flex items-center gap-1">{item.title}</Link>
                                    }

                                </li>

                            )
                        })
                    }

                </ul>
            </nav>
        </>
    );
}




