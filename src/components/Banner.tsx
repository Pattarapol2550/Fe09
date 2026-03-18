'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import styles from "./banner.module.css"
import Image from "next/image"
import { useSession } from "next-auth/react"


export default function Banner() {
  const router = useRouter()
  const banner = ["/img/cover.jpg","/img/cover2.jpg","/img/cover3.jpg","/img/cover4.jpg"]
  const[index,setIndex] = useState(0)

  const {data : session} = useSession()
  console.log(session)

  
  return (
    <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
      <Image src={banner[index%4]} 
      alt="banner"
      fill={true}
       objectFit='cover'/>
        
        <div className={styles.bannerText}>
      <h1 className="text-[36px] font-bold text-[#ffd700] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
        where every event finds its venue
      </h1>

      <p className="text-[18px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] ">
Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connect people to the perfect place.      </p>
        </div>

        {
          session ? <div className="z-30 absolute top-5 right-5 font-semibold text-[#ffd700]">Welcome {session.user?.name} </div> : null
        }

        <button
      className="absolute bottom-6 right-6 bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg 
      hover:bg-indigo-600 transform transition duration-200 hover:scale-110"
      onClick={(e)=>{
        e.stopPropagation()
        router.push("/venue")
      }}
    >
      Select Venue
    </button>
    </div>

    
  );
}
