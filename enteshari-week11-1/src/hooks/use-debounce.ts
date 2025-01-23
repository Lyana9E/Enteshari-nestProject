import {useState} from "react";


export default function useDebounce (func:Function,delay:number ){
    const [timer,setTimer] = useState<NodeJS.Timeout>()

    return function () {
        clearTimeout(timer);
        let timerTimeOut:NodeJS.Timeout =setTimeout(func,delay)
        setTimer(timerTimeOut);
    }
}