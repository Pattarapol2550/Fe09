'use client'
import { useEffect, useReducer, useRef, useState } from "react";
import Card from "./Card";
import Link from "next/link";
import getVenues from "@/libs/getVenues";

type Venue = {
    id: string
    name: string
    picture: string
}

type VenueResponse = {
    data: Venue[]
}

export default function CardPanel(){

    const [venueResponse,setVenueResponse] = useState<VenueResponse | null>(null)

    useEffect(()=>{
        const fetchData = async()=>{
            const venues = await getVenues()
            setVenueResponse(venues)
        }
        fetchData()
    },[])

    const countRef = useRef(0)
    const inputRef = useRef<HTMLInputElement>(null)

const ratingReducer = (
    ratingMap: Map<string, number>,
    action:{type:string,venueName:string, rating?:number}
)=>{
    const newMap = new Map(ratingMap)

    switch(action.type){

        case "add":
            newMap.set(action.venueName, action.rating ?? 0)
            return newMap

        case "remove":
            newMap.delete(action.venueName)
            return newMap

        default:
            return ratingMap
    }
}

const [venueRatings, dispatchRating] = useReducer(
    ratingReducer,
    new Map<string, number>([
        ["The Bloom Pavilion",0],
        ["Spark Space",0],
        ["The Grand Table",0]
    ])
)

if(!venueResponse){
    return (<p>Card Panel is Loading ...</p>)
}

return(
<div>

<div style={{
    margin:"20px",
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    alignContent:"space-around"
}}>

{
venueResponse.data.map((venueItem)=>(
<Link href={`/venue/${venueItem.id}`} className="w-1/5" key={venueItem.id}>

<Card
    venueName={venueItem.name}
    imgSrc={venueItem.picture}
    rating={venueRatings.get(venueItem.name) || 0}
    onRatingChange={(venue:string,value:number)=>{
        dispatchRating({type:'add',venueName:venue,rating:value})
    }}
/>

</Link>
))
}

</div>

<div className="w-full text-xl font-medium">
Venue List with Ratings : {venueRatings.size}
</div>

{Array.from(venueRatings).map(([venue,rating])=>(

<div
key={venue}
data-testid={venue}
onClick={()=>dispatchRating({type:'remove',venueName:venue})}
>

{venue} Rating : {rating}

</div>

))}

<button
className="block rounded-md bg-sky-500 hover:bg-indigo-600 px-3 py-2 text-white"
onClick={()=>{
countRef.current = countRef.current + 1
alert(countRef.current)
}}
>
Count with local variable
</button>

<input
type="text"
placeholder="Please fill"
className="block text-gray-900 text-sm rounded-lg
p-2 m-2 bg-purple-50 ring-1 ring-inset ring-purple-400
focus:outline-none focus:bg-purple-200 focus:ring-2"
ref={inputRef}
/>

<button
className="block rounded-md bg-sky-500 hover:bg-indigo-600 px-3 py-2 text-white"
onClick={()=>{
if(inputRef.current) inputRef.current.focus()
}}
>
Focus Input
</button>

</div>
)
}