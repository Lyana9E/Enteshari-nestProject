import React from 'react';
import Link from "next/link";


interface Props {
    icon: string;
    size?: number;
    link?: string;
    title?: string;
    hiddeTitleOnMobile?: boolean;
    badge?: number;
    titleClassName?: string;
    path?: number;
    linkClass?: string;
}

export function IconBox({
                            icon,
                            size = 22,
                            link,
                            title,
                            hiddeTitleOnMobile = false,
                            badge = 0,
                            titleClassName = '',
                            path,
                            linkClass = ''
                        }: Props) {
    let span = [];
    for (let i = 1; i <= path; i++) {
        span.push(<span className={`path${i}`}></span>)

    }
    if(link){
        return (
            <Link href="#" className={`flex items-center cursor-pointer ${linkClass}`}>
                {
                    badge ?
                        <div className="relative">
                        <span
                            className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                            <i className={` ${icon} text-[${size}px]`}>
                                {
                                    path && span
                                }

                            </i>

                        </div>
                        :
                        <i className={` ${icon} text-[${size}px]`}>
                            {path && span}
                        </i>
                }
                {
                    title && <div
                        className={`${hiddeTitleOnMobile ? 'hidden xl:inline-block' : 'inline-block'} ${titleClassName}`}>{title}</div>
                }
            </Link>);

    }
    else{
        return (
            <>
                {
                    badge ?
                        <div className="relative">
                        <span
                            className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                            <i className={` ${icon} text-[${size}px]`}>
                                {
                                    path && span
                                }

                            </i>

                        </div>
                        :
                        <i className={` ${icon} text-[${size}px]`}>
                            {path && span}
                        </i>
                }
                {
                    title && <div
                        className={`${hiddeTitleOnMobile ? 'hidden xl:inline-block' : 'inline-block'} ${titleClassName}`}>{title}</div>
                }
            </>
        );
    }


}

