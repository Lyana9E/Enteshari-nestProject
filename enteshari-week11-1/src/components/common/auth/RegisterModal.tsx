import {Input, Modal} from "@/components";
import React from "react";
import {useForm} from "react-hook-form";

interface Props {
    onClose: () => void
}

interface FormDate {
    username:string,
    email:string,
    password:string,
}


export function RegisterModal({onClose}: Props) {



    const {register, handleSubmit, formState: {errors}} = useForm<FormDate>();
    const onSubmit = (data:FormDate) => {
        console.log(data);

    }
    return (
        <Modal title={'Register'} closeModal={(onClose)}>
            <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col justify-between gap-5 items-center '}>

                <Input register={register('username', {required: true})}  inputType={'text'} label={'username'} placeholder={'Enter your Name'}/>


                <Input register={register('email', {required:'Enter your Email'})}  inputType={'email'} label={'email'} placeholder={'Enter your Email'}/>


                <Input register={register('password', {required:'Enter your Password',minLength:{value:3 , message:'your password should have 3 character at least '} , maxLength:{value:10,message:'your password can have 10 character'}})}  inputType={'password'} label={'password'} placeholder={'Enter your Password'}/>


                <div className={'flex flex-col gap-2 items-start w-[70%]'}>
                <button className={'mt-2  px-4 py-2 rounded-xl bg-green-200 text-white cursor-pointer'}> submit </button>
                </div>
            </form>
        </Modal>
    );
}