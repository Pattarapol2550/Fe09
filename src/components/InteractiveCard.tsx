'use client'
import React from 'react'
import styles from './card.module.css'

export default function InteractiveCard({children , contentName} : {children : React.ReactNode , contentName : string}){
    function onVenueSelected(){
        alert("You select " + contentName)
    }

    function onCardMouseAction(event : React.SyntheticEvent){
        if(event.type =='mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.add('shadow-2xl')
            event.currentTarget.classList.add('bg-neutral-200')
        }else{
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.remove('bg-neutral-200')
             event.currentTarget.classList.add('shadow-lg')
             event.currentTarget.classList.add('bg-white')
        }
    }
    return(
        <div className='w-full h-[300px] bg-white  rounded-lg shadow-lg' 
        // onClick = {()=> onVenueSelected()}
         onMouseOver={(e)=>onCardMouseAction(e)}
          onMouseOut={(e)=>onCardMouseAction(e)}
         >
           {children}
        </div>
    );
}