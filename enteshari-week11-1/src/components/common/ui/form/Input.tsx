import React, {useId} from "react";
import { UseFormRegisterReturn} from "react-hook-form/dist/types/form";

interface Props {
    inputType?:'text'|'email'|'password'|'tel'|'number';
    label?:string;
    placeholder?:string;
    register: UseFormRegisterReturn<any>;



}

export function Input({inputType='text',label,placeholder='',register}: Props) {
    // const id = Math.random().toString();
    const id =useId()

    return (
        <div className={'flex flex-col gap-2 items-start w-[70%]'}>

            {label &&     <label htmlFor={id} className={'font-bold text-nowrap'}>
                {label}:
            </label>}
            <input className={'bg-white rounded-md p-2 w-full '}  id={id} type={inputType} placeholder={placeholder} {...register}/>
        </div>
    );
}