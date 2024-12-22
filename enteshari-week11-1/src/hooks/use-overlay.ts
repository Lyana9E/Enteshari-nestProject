import {useEffect} from "react";

interface Props{
    onClick: ()=> void,
    isOverFlowHidden?:boolean
}

export function useOverlay ({onClick , isOverFlowHidden = false}:Props){
    useEffect(()=>{
        const clickHandler =()=>{
            onClick()

        }

        document.addEventListener('click',clickHandler);

        return ()=> document.removeEventListener('click',clickHandler);

    },[])


    useEffect(() => {
        if(isOverFlowHidden){
            document.body.style.overflowY = 'hidden';
        }
        else{
            document.body.style.overflowY = 'auto';

        }
        return ()=>{
            document.body.style.overflowY = 'auto';

        }

    }, [isOverFlowHidden]);

}