import {IconBox, ImageView, Rating} from "@/components";
import {useEffect, useState} from "react";
import {TimerHelper} from "@/utils/timer";

interface Props {
    sliderItem: {
        title: string,
        imgSrc: string,
        category: string,
        rate: number,
        weight: number,
        unit: string,
        price: number,
        sale_price: number,
        label: string,
        dead_line:string,

    };

}

export function ProductDealsCard({sliderItem}: Props) {

    const [remainTime , setRemainTimer] = useState(
    {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(()=>{
       const interval = setInterval(()=>{
            const timerObj= TimerHelper(sliderItem.dead_line)
            setRemainTimer(timerObj);

        },1000);
       return ()=>{
           clearInterval(interval);
       }
    },[])
    return (
        <div className="relative h-[438px]">
            <ImageView src={sliderItem.imgSrc} height={335} width={378} alt={'product image'} className={'w-full'}/>
            <div className="absolute z-[21] left-[50%] translate-x-[-50%] top-[195px]">
                <div className=" timer1 flex items-center gap-3 h-[60px]">
                    <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                        <div className="day text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.days}</div>
                        <div className="font-lato text-gray-500 text-small">Days</div>
                    </div>
                    <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                        <div className="hour text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.hours}</div>
                        <div className="font-lato text-gray-500 text-small">Hours</div>
                    </div>
                    <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                        <div className="minute text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.minutes}</div>
                        <div className="font-lato text-gray-500 text-small">Mins</div>
                    </div>
                    <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                        <div className="second text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.seconds}</div>
                        <div className="font-lato text-gray-500 text-small">Secs</div>
                    </div>
                </div>



                <div className="bg-white mt-2.5 px-8 pt-6 pb-4 rounded-[10px] shadow-c-xs">
                    <div className="text-heading-sm text-blue-300">{sliderItem.title}</div>
                    <div className="flex w-[106px] justify-between h-4 items-center mt-1">
                        <div className="flex gap-4">
                            <div>salam</div>
                            <Rating ratingNumber={sliderItem.rate} />
                            <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                        </div>
                    </div>
                    <div className="font-lato text-xsmall text-gray-500 mt-1">{sliderItem.weight} {sliderItem.unit}</div>
                    <div className="flex items-center justify-between mt-3">
                        {
                            sliderItem.sale_price ?
                                <div>
                                    <span className="text-heading5 text-green-200">${sliderItem.sale_price}</span>
                                    <span
                                        className="text-heading-sm line-through text-gray-500">${sliderItem.price}</span>
                                </div>
                                :
                                <span className="text-heading5 text-green-200">${sliderItem.price}</span>
                        }
                        <div className="add-product">
                            <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds +</button>
                            <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                                <input type="number" value="1" className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center" />
                                <div className="flex flex-col justify-between">
                                    <IconBox icon={'up icon-angle-small-up'} size={10}/>
                                    <IconBox icon={'down icon-angle-small-down'} size={10}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};