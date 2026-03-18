import Image from "next/image"
import getVenue from "@/libs/getVenue"

export default async function VenuePage({
  params
}:{
  params: Promise<{vid:string}>
}){

const { vid } = await params
const venueDetail = await getVenue(vid)

return(
<main className="text-center p-5">

<h1 className="text-lg font-medium mb-5">
 {venueDetail.data.name}
</h1>

<div className="flex flex-row items-start gap-8">

<Image
 src={venueDetail.data.picture}
 alt="Venue Image"
 width={400}
 height={300}
 className="rounded-lg"
/>

<div className="flex flex-col text-left gap-2">

<div>Name : {venueDetail.data.name}</div>
<div>Address : {venueDetail.data.address}</div>
<div>District : {venueDetail.data.district}</div>
<div>Postal Code : {venueDetail.data.postalcode}</div>
<div>Telephone : {venueDetail.data.tel}</div>
<div>Daily Rate : {venueDetail.data.dailyrate}</div>

</div>

</div>

</main>
)
}