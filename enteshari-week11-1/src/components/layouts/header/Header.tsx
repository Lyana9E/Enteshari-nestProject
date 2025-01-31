import React, { useState, MouseEvent, useContext} from 'react';
import {Logo, Menu, RegisterModal, SearchForm} from "@/components";
import Link from "next/link";
import {IconBox} from "@/components/common/ui/icon-box";
import {useOverlay} from "@/hooks/use-overlay";
import {LoginModal} from "@/components/common/auth/LoginModal";
import {useModal} from "@/store/ModalContext";
import {useUser} from "@/store/AuthContext";
import {toast} from "react-toastify";

export function Header() {

    const {isLogin,logOut} =useUser()
    const [showMobileMenu,setShowMobileMenu] = useState<boolean>(false);
    const {currentModal,openModal,closeModal}= useModal()


    const menuBtnClickHandler =(e:MouseEvent)=>{
        e.stopPropagation()

        setShowMobileMenu((prevState)=> !prevState)

    }

    const mobileMenuBodyClickHandler = (e:MouseEvent)=>{
        e.stopPropagation()

    }

    const AccountHandler = ()=>{
        if(isLogin){
            logOut();
            toast.success('you log out successfully ')

        }else {
            openModal('login')

        }

    }


    // useEffect(()=>{
    //     const clickHandler =()=>{
    //         setShowMobileMenu(false);
    //
    //     }
    //
    //     document.addEventListener('click',clickHandler);
    //
    //     return ()=> document.removeEventListener('click',clickHandler);
    //
    // },[])

    useOverlay({
    onClick : ()=>{
        setShowMobileMenu(false);
    } , isOverFlowHidden :showMobileMenu
    })





    return (
        <header className="mb-[33px]">
            {currentModal ==='login' && <LoginModal onClose={closeModal} />}
            {currentModal ==='register' && <RegisterModal onClose={closeModal}/>}
            <div className="container flex items-center justify-between py-4 md:py-6 xl:py-8">
                <Logo/>
                <div
                    className="border-2 border-green-150 rounded-[5px] max-w-[700px] w-full mx-[15px] px-[15px] hidden lg:inline-block">
                    <SearchForm inputClassName={'py-[15px]'}/>
                </div>
                <ul className="hidden lg:flex gap-5">
                    <li onClick={()=>AccountHandler()} className="flex gap-2 cursor-pointer">
                        <IconBox icon={'icon-user'} link={"#"} size={24} title={`${isLogin ? 'LogOut' : 'Login/Register'}`} hiddeTitleOnMobile={true}
                                 titleClassName={'text-medium text-gray-500 font-lato'} linkClass={'gap-1'}/>
                    </li>
                    <li className="flex gap-2 cursor-pointer">
                        <IconBox icon={'icon-shopping-cart'} badge={4} hiddeTitleOnMobile={true} title={'Card'}
                                 size={24} link={'#'} titleClassName={'text-medium text-gray-500 font-lato'}
                                 linkClass={' gap-1'}/>
                    </li>
                </ul>
                <button onClick={menuBtnClickHandler} id="menu_btn" className="flex flex-col justify-between py-[4px] lg:hidden w-[24px] h-[24px]">
                    <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
                    <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
                    <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
                </button>
            </div>

            <div className="border-gray-200 border-y h">
                <div onClick={mobileMenuBodyClickHandler} className={`${showMobileMenu ? 'left-0 fixed overflow-y-scroll' :'-left-[100%] absolute'} container transition-all w-4/5 rounded-[24px] lg:rounded-[0px] lg:w-auto flex  top-0 bottom-0  lg:static flex-col lg:flex-row justify-start lg:justify-between items-start pt-[16px] pl-[24px] lg:py-[13px] lg:items-center h-[100vh] bg-white lg:h-[70px] mobile-menu z-50`}>
                    <Menu/>

                    <div className="hidden lg:flex items-center shrink-0 gap-3">
                        <IconBox icon={'icon-headset xl:text-[32px] 2xl:text-[36px] aspect-square'} link={'#'}
                                 size={30}/>
                        <div>
                            <Link href="tel:19008888"
                                  className="text-green-200 lg:text-heading6 xl:text-heading5 2xl:text-heading4">1900-8888</Link>
                            <div className="font-lato text-xsmall"><span className="hidden xl:inline-block">24/7 </span>Support
                                Center
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container flex justify-between lg:hidden pt-[20px] pb-[16px] items-center">
                    <div className="border-[1px] border-green-150 rounded-[5px] w-full max-w-[220px] p-[6px]">
                        <SearchForm inputClassName={'py-[15px]'}/>

                    </div>
                    <ul className="flex gap-5">
                        <li className="flex gap-2 cursor-pointer">
                            <IconBox icon={'icon-user'} link={"#"} size={24} title={"Account"} hiddeTitleOnMobile={true}
                                     titleClassName={'text-medium text-gray-500 font-lato'} linkClass={'gap-1'}/>
                        </li>
                        <li className="flex gap-2 cursor-pointer">
                            <IconBox icon={'icon-shopping-cart'} badge={0} hiddeTitleOnMobile={true} title={'Card'}
                                     size={24} link={'#'} titleClassName={'text-medium text-gray-500 font-lato'}
                                     linkClass={' gap-1'}/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    );
}

