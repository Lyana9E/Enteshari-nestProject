import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    children:ReactNode;
    className?:string;

};

export function Section({className , children}: Props) {
    return (
        <section className={twMerge('container mb-[75px]',className)}>
            {children}
        </section>
    );
};