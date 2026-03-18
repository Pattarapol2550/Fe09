import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking(){

    const session = await getServerSession(authOptions)

    let profile = null
    let createdAt = null

    if(session?.user?.token){
        profile = await getUserProfile(session.user.token)
    }

    if(profile){
        createdAt = new Date(profile.data.createdAt)
    }

    return(
        <main className="w-[100%] flex flex-col items-center space-y-4 ">
            <div className="font-bold text-2xl">Venue Booking</div>

            {
                profile && (
                    <div className="w-full max-w-md bg-gray-100 p-4 rounded-md">
                        <div><b>Name:</b> {profile.data.name}</div>
                        <div><b>Email:</b> {profile.data.email}</div>
                        <div><b>Tel:</b> {profile.data.tel}</div>
                        <div><b>Member Since:</b> {createdAt?.toString()}</div>
                    </div>
                )
            }

            <TextField variant="standard" label="Name-Lastname"/>
            <TextField variant="standard" label="Contact-Number"/>

            <DateReserve/>

            <button>Book Venue</button>
        </main>
    );
}