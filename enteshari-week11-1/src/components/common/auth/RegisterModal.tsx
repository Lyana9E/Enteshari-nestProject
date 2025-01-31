import {Input, Modal} from "@/components";
import React from "react";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {RegisterApiCall} from "@/api/Auth";
import {useUser} from "@/store/AuthContext";
import {useModal} from "@/store/ModalContext";
import {toast} from "react-toastify";

interface Props {
    onClose: () => void
}

interface RegisterFormDate {
    username:string,
    email:string,
    password:string,
}


export function RegisterModal({onClose}: Props) {
    const {openModal,closeModal}=useModal()
    const {login,isLogin}= useUser()
    const {register, handleSubmit, formState: {errors}} = useForm<RegisterFormDate>();

    const Mutate = useMutation({mutationFn:RegisterApiCall})
    console.log('is',isLogin);
    const onSubmit = (data:RegisterFormDate) => {
        Mutate.mutate(data,{
            onSuccess:(response)=>{
                login(response.jwt,response.user);
                toast.success('You registered successfully ');
                closeModal()
            }})
    }
    return (
        <Modal title={'Register'} closeModal={(onClose)}>
            <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col justify-between gap-5 items-center '}>

                <Input {...{placeholder:"Enter your Name"}} errors={errors} register={register('username', {required: true})}  inputType={'text'} label={'username'} />


                <Input {...{placeholder:'Enter your Email'}} errors={errors} register={register('email', {required:'Enter your Email'})}  inputType={'email'} label={'email'} />


                <Input {...{placeholder:'Enter your Password'}} errors={errors} register={register('password', {required:'Enter your Password',minLength:{value:3 , message:'your password should have 3 character at least '} , maxLength:{value:10,message:"your password can have 10 character"}})}  inputType={'password'} label={'password'} />


                <div className={'flex flex-col gap-2 items-start w-[70%]'}>
                <button className={'mt-2  px-4 py-2 rounded-xl bg-green-200 text-white cursor-pointer'}> submit </button>
                </div>
            </form>
        </Modal>
    );
}