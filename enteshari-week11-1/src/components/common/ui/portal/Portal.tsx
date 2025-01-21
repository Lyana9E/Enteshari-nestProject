import {createPortal} from "react-dom";
import {ReactNode, useEffect} from "react";

interface Props {
    children:ReactNode;
    closeModal:()=>void;
    
}
export function Portal({children,closeModal}: Props) {


    useEffect(() => {
        document.body.style.overflowY ='hidden';
        return ()=>{
            document.body.style.overflowY ='auto';

        }
    }, []);
    return createPortal (
        <div onClick={closeModal} className={'fixed top-0 right-0 bottom-0 left-0 bg-[#efefef] z-10 bg-opacity-80 flex justify-center items-center'}>
            <div onClick={(e)=>e.stopPropagation()}>
                {children}

            </div>
        </div>,
        document.getElementById('portal')!
    );
};