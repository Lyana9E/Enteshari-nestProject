import {Input, Modal} from "@/components";
import {useModal} from "@/store/ModalContext";
import React from "react";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {LoginApiCall, RegisterApiCall} from "@/api/Auth";
import {useUser} from "@/store/AuthContext";
import {toast} from "react-toastify";

interface Props {
    onClose:()=>void;

}

interface LoginFormDate {

    identifier: string;
    password: string;

}


export function LoginModal({onClose}: Props) {
    const {login,isLogin}= useUser()
    const {closeModal}=useModal()


    const {register,handleSubmit,formState:{errors} }=useForm<LoginFormDate>({})

    const Mutate = useMutation({mutationFn:LoginApiCall})
    const onSubmit =(data:LoginFormDate)=>{
        Mutate.mutate(data,{
            onSuccess:(response)=>{
                console.log('response',response)
                login(response.jwt,response.user);
                toast.success('You login successfully ');
                closeModal()


            }


        })



    }
    const {openModal}= useModal()
    return (
        <Modal title={'Login'} closeModal={(onClose)}>
            <div className={'flex flex-col justify-between'}>
                <form className={'flex flex-col justify-between gap-5 items-center '}  onSubmit={handleSubmit(onSubmit)}>
                    <Input {...{placeholder:"Enter your Name"}} errors={errors} register={register('identifier', {required: true})}  inputType={'text'} label={'username'} />

                    <Input {...{placeholder:'Enter your Password'}} errors={errors} register={register('password', {required:'Enter your Password',minLength:{value:3 , message:'your password should have 3 character at least '} , maxLength:{value:10,message:"your password can have 10 character"}})}  inputType={'password'} label={'password'} />

                    <div className={'flex mt-2 justify-between gap-2 items-center w-[70%]'}>
                        <button className={'  px-4 py-2 rounded-xl bg-green-200 text-white cursor-pointer'}> Login </button>
                        <span onClick={()=>openModal('register')} className={ 'px-4 py-2  bg-blue-300 text-white rounded-xl cursor-pointer'}>do not have account yet?</span>

                    </div>
                </form>
            </div>
        </Modal>
    );
}