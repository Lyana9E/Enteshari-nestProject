import {ReactNode} from "react";
import {Portal} from "@/components";

interface Props {
    children : ReactNode;
    title:string;
    closeModal:()=>void

    
}

export function Modal({children,title,closeModal}: Props) {
    return (
        <Portal closeModal={closeModal}>
        <div className={' z-10 min-w-[100vw] md:min-w-[50vw]  min-h-[100vh] md:min-h-[50vh] overflow-auto rounded bg-gray-200'}>
            <div className={'flex justify-between  bg-white p-8 text-[22px]'}>
                <div onClick={closeModal} className={'cursor-pointer'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" viewBox="0 0 30 30">
                        <path d="M12 10.586l6.293-6.293 1.414 1.414L13.414 12l6.293 6.293-1.414 1.414L12 13.414l-6.293 6.293-1.414-1.414L10.586 12 4.293 5.707 5.707 4.293z"/>
                    </svg>
                </div>
                {title}
            </div>
            <div className={'p-8 text-[18px]'}>
                {children}
            </div>

        </div>
        </Portal>
    );
};