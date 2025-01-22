import React, {useId} from "react";
import { UseFormRegisterReturn ,FieldErrors} from "react-hook-form";
import {ErrorMessage} from "@/components";

interface Props {
    inputType?:'text'|'email'|'password'|'tel'|'number';
    label?:string;
    placeholder?:string;
    register: UseFormRegisterReturn<any>;
    errors: FieldErrors<any>;



}

export function Input({inputType='text',label,placeholder='',register,errors}: Props) {
    // const id = Math.random().toString();
    const id:string =useId();
    const name = register.name;
    let hasError:boolean =false;
    if(errors && errors[name]){
        hasError=true
    }

    return (
        <div className={'w-[70%]'}>
            <div className={'flex flex-col gap-2 items-start '}>

                {label &&     <label htmlFor={id} className={'font-bold text-nowrap'}>
                    {label}:
                </label>}
                <input className={`bg-white rounded-md p-2 w-full border ${hasError && 'border-red'}`}  id={id} type={inputType} placeholder={placeholder} {...register} />
            </div>
            <ErrorMessage name={name} errors={errors}/>
        </div>
    );
}