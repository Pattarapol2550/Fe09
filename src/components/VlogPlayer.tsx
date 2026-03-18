'use client'
import { useRef, useEffect, useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"
export function VlogPlayer({ vdoSrc, isPlaying }:{ vdoSrc:string, isPlaying:boolean }){

const vdoRef = useRef<HTMLVideoElement>(null)

useEffect(()=>{

    if(isPlaying){
       // alert('Play VDO')
        vdoRef.current?.play()
    }else{
       // alert('Pause VDO')
        vdoRef.current?.pause()
    }

},[isPlaying])

    useWindowListener("resize" , (e)=>{alert('Window Width is ' 
        + (e.target as Window).innerWidth)})


return(
    <video
        ref={vdoRef}
        className="w-[70%] h-full object-cover object-[center_60%]"
        src={vdoSrc}
        controls
        loop
        muted
    />
)
}