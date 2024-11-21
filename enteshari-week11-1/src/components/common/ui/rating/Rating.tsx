import {IconBox} from "@/components";

interface Props {
    ratingNumber:number;

};

export function Rating({ratingNumber}: Props) {
    const starIcon=[]
    const notStarIcon=[]

    for ( let i=0 ; i<ratingNumber ;i++){
        starIcon.push( <li className="flex"><IconBox icon={'icon-star-full'} size={12}/>
        </li>)
    }
    for ( let i=ratingNumber ; i<5 ;i++){
        starIcon.push( <li className="flex"><IconBox icon={'icon-star-empty'} size={12}/>
        </li>)
    }

    return (
            <div className="flex gap-4">
                <ul className="flex gap-1">
                    {starIcon}{notStarIcon}
                </ul>
                <div className="text-xsmall text-gray-500 font-lato">({ratingNumber})</div>
            </div>


    );
};