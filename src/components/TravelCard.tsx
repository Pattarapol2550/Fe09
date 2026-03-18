'use client'
import { VlogPlayer } from "./VlogPlayer"
import { useState } from "react"
import { Rating } from "@mui/material"
import { useWindowListener } from "@/hooks/useWindowListener"


export function TravelCard(){

const [playing, setPlaying] = useState(true)
const [rating,setRating] = useState(0)
const [pointerPosition,setPointerPosition] = useState({x:0 ,y:0})

/*
useWindowListener('pointermove' , (e)=>{
    const event = e as PointerEvent
    setPointerPosition({
        x: event.clientX,
        y: event.clientY
    })
}) */

return(
<div className="w-[80%] shadow-lg mx-[10%] my-10 p-4 rounded-lg bg-gray-200 flex flex-row gap-6">

    
    <div className="w-[40%] h-[250px] overflow-hidden rounded-md">
        <VlogPlayer vdoSrc="/video/vlog2.mp4" isPlaying={playing}/>
    </div>

    <div className="flex flex-col justify-center gap-2 ">

        <h2 className="text-2xl font-bold text-gray-800">
            Babayaka ({pointerPosition.x} , {pointerPosition.y})
        </h2>

        

        <button
            className="w-fit rounded-md bg-sky-500 hover:bg-indigo-600 px-4 py-2 text-white shadow-sm"
            onClick={()=>setPlaying(!playing)}
            >
            {playing ? 'Pause' : 'Play'}
        </button>

        <Rating className="w-full h-[10%] " value={(rating==undefined)?0:rating}
        onChange={(e,newValue) => {if(newValue!=null) setRating(newValue)}}/>
    </div>

</div>
)
}