import Image from "next/image";


interface Props{
    src:string,
    alt:string,
    width:number,
    height:number,
    className?:string,
}
export function ImageView({src,alt,width,height,className}) {

    const isRemote = src.substring(0,8)==='/uploads'
    return (
        <>
            <Image src={`${isRemote ? 'https://nest.navaxcollege.com' + src : src}`} alt={alt} width={width} height={height} className={className ?? ''} />

        </>
    );
}

