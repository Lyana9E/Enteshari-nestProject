import {Input, Modal} from "@/components";
import React from "react";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {RegisterApiCall} from "@/api/Auth";
import {useUser} from "@/store/AuthContext";

interface Props {
    onClose: () => void
}

interface FormDate {
    username:string,
    email:string,
    password:string,
}


export function RegisterModal({onClose}: Props) {
    const {login,isLogin}= useUser()



    const {register, handleSubmit, formState: {errors}} = useForm<FormDate>();

    const Mutate = useMutation({mutationFn:RegisterApiCall})
    const onSubmit = (data:FormDate) => {
        Mutate.mutate(data,{
            onSuccess:(response)=>{
                window.localStorage.setItem('token',response.jwt);
                login(response.jwt,response.user);
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