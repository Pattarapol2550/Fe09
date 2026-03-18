import { Rating } from '@mui/material'
import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function Card({
    venueName,
    imgSrc,
    rating,
    onRatingChange
} : {
    venueName : string
    imgSrc : string
    rating?: number
    onRatingChange?: Function
}){

return(
<InteractiveCard contentName={venueName}>
           
    <div className={styles.cardimg}>
        <Image
            src={imgSrc}
            alt='picture card'
            fill={true}
            style={{objectFit:'cover'}}
        />
    </div>

    <div className="font-bold h-[15%] text-[#436df5] text-[15px] text-left p-3">
        {venueName}
    </div>
            
    {rating !== undefined && onRatingChange && (
        <div onClick={(e)=>e.stopPropagation()}>
            <Rating
                id={`${venueName} Rating`}
                name={`${venueName} Rating`}
                data-testid={`${venueName} Rating`}
                value={rating}
                onChange={(e,newValue)=>{
                    e.stopPropagation()
                    onRatingChange(venueName,newValue)
                }}
            />
        </div>
    )}

</InteractiveCard>
)
}