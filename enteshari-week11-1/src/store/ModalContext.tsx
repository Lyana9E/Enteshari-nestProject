import {createContext, ReactNode, useContext, useEffect, useState} from "react";


interface Props {
    children: ReactNode;
}
type ModalType = null|'login'|'register';

interface ContextProps{
    currentModal:ModalType;
    openModal:(modalName:ModalType)=>void;
    closeModal:()=>void


}

 const  ModalContext = createContext<ContextProps>({currentModal:null,openModal:()=>{},closeModal:()=>{}})

export const useModal = ()=> useContext(ModalContext);



export function ModalContextProvider({children}: Props) {
    const [showModal,setShowModal]=useState<ModalType>(null);


    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if(hash.includes('-modal')){
            const modalName =hash.split('-')[0] as ModalType;
            setShowModal(modalName);

        }
    }, []);


    const openModal = (modalName:ModalType)=>{
        setShowModal(modalName);
    }

    const closeModal = ()=>{
        setShowModal(null)


    }


    return (<ModalContext.Provider value={{currentModal:showModal,openModal:openModal, closeModal:closeModal}}>
            {children}

        </ModalContext.Provider>

    )

}