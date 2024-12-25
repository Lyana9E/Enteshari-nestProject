

import Link from "next/link";
import {IconBox} from "@/components/common/ui/icon-box";
import {EntityType, MenuItemType} from "@/types";
import {useMenu} from "@/hooks/useMenu";
import {useEffect, useState ,MouseEvent} from "react";
import {useOverlay} from "@/hooks/use-overlay";

export function Menu() {

    const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false)
    const {data: mainMenuItems} = useMenu({position: 'main_menu'})
    const {data: categoryMenuItems} = useMenu({position: 'brows-category'})



    useOverlay({
        onClick:()=>{
            setShowCategoryMenu(false);
        }
    })


    function categoryBtnClickHandler(e:MouseEvent) {
        e.stopPropagation()
        setShowCategoryMenu((prevState: boolean) => !prevState)
    }
    function categoryBodyClickHandler (e:MouseEvent){
        e.stopPropagation()

    }




    // useEffect(() => {
    //     const handleClick = () => {
    //         setShowCategoryMenu(false);
    //     };
    //
    //     document.addEventListener('click', handleClick);
    //
    //
    //     return () => {
    //         document.removeEventListener('click', handleClick);
    //     };
    // }, []);



        return (
        <>

            <div id="all_categories" className={'relative'}>
                <div onClick={categoryBtnClickHandler} className=" inline-flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
                    <IconBox icon={'icon-apps'} link={'#'} size={24} title={'Browse All Categories'}
                             titleClassName={'text-medium'} linkClass={'gap-2'}/>

                    <IconBox icon={'icon-angle-small-down'} size={24}/>
                </div>
                <div id="all_categories_box"
                     onClick={categoryBodyClickHandler}
                     className={`${showCategoryMenu ? 'flex' : 'hidden'} lg:absolute z-20 bg-white left-0 top-16 lg:w-[500px] rounded-[5px] lg:border-[1px] border-green-300 lg:p-[30px] hover:cursor-default`}>
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">

                        {
                            categoryMenuItems &&
                            categoryMenuItems.data.map((item: EntityType<MenuItemType>, index: number) => {

                                return (
                                    <IconBox key={index} icon={item.attributes.icon_name} title={item.attributes.title}
                                             titleClassName={'text-heading-sm text-blue-300'} size={30}
                                             path={item.attributes.icon_path}
                                             link={item.attributes.link}
                                             linkClass={'gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-full lg:basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300'}/>

                                )
                            })
                        }

                        {/*{BrowsCategoryMock.map((item, index) => {*/}
                        {/*    return (*/}
                        {/*        <IconBox key={index} icon={item.icon} title={item.title}*/}
                        {/*                 titleClassName={'text-heading-sm text-blue-300'} size={30} path={item.iconPath}*/}
                        {/*                 link={item.link}*/}
                        {/*                 linkClass={'gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300'}/>*/}

                        {/*    )*/}
                        {/*})}*/}
                        <IconBox icon={'icon-add'} linkClass={'gap-4 lg:justify-center w-full mt-[17px]'} link={'#'}
                                 size={24} title={'More Categories'} titleClassName={'text-heading-sm text-blue-300'}/>

                    </div>
                </div>

            </div>

            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">

                    {
                        mainMenuItems &&
                        mainMenuItems.data.map((item: EntityType<MenuItemType>, index: number) => {

                            return (
                                <li key={index}>
                                    {
                                        item.attributes.icon_name ?
                                            <IconBox link={item.attributes.link} icon={item.attributes.icon_name}
                                                     title={item.attributes.title}
                                                     titleClassName={'text-heading6 lg:text-heading-sm xl:text-heading6'}
                                                     size={24} linkClass={'flex flex-row gap-2 items-center'}/>
                                            :
                                            <Link href={item.attributes.link}
                                                  className="flex items-center gap-1">{item.attributes.title}</Link>
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




