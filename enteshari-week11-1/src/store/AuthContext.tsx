import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {UserType} from "@/types/api/Auth";


interface Props{
    children : ReactNode;
}
interface AuthContextProps{
    isLogin:boolean ;
    login: (jwt:string ,user:UserType)=>void;
    logOut:()=>void;
}
const AuthContext = createContext<AuthContextProps>({isLogin:false , login:()=>{},logOut:()=>{}});

export const useUser = ()=>  useContext(AuthContext)


export function AuthContextProvider({children}:Props) {
    const [isLogin , setIsLogin]= useState<boolean>(false);

    useEffect(() => {
        if(window.localStorage.getItem('token')){
            setIsLogin(true)

        }
    }, []);
    const LoginHandler =(jwt:string ,user:UserType)=>{
        window.localStorage.setItem('token',jwt);
        window.localStorage.setItem('user',JSON.stringify(user));
        setIsLogin(true);

    }

    const LogOutHandler = ()=>{
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        setIsLogin(false)
    }
    return <AuthContext.Provider value={{isLogin:isLogin , login:LoginHandler,logOut:LogOutHandler}}>{children}</AuthContext.Provider>}