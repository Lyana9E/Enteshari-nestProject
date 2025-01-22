import {createContext, ReactNode, useContext, useState} from "react";
import {UserType} from "@/types/api/Auth";


interface Props{
    children : ReactNode;
}
interface AuthContextProps{
    isLogin:boolean ,
    login: (jwt:string ,user:UserType)=>void

}
const AuthContext = createContext<AuthContextProps>({isLogin:false , login:()=>{}});

export const useUser = ()=>  useContext(AuthContext)


export function AuthContextProvider({children}:Props) {
    const [isLogin , setIsLogin]= useState<boolean>(false);
    const LoginHandler =(jwt:string ,user:UserType)=>{
        window.localStorage.setItem('token',jwt);
        window.localStorage.setItem('user',JSON.stringify(user));
        setIsLogin(true);

    }
    return <AuthContext.Provider value={{isLogin:isLogin , login:LoginHandler}}>{children}</AuthContext.Provider>}