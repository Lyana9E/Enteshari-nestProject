import {createPortal} from "react-dom";
import {ReactNode} from "react";

interface Props {
    children:ReactNode;
    
}
export function Portal({children}: Props) {
    return createPortal (
        <div className={'fixed top-0 right-0 bottom-0 left-0 bg-[#efefef] z-10 bg-opacity-80'}>
            <div className={'relative'}>
                {children}

            </div>
        </div>,
        document.getElementById('portal')!
    );
};