import Link from "next/link"
import Card from "./Card"

export default async function VenueCatalog({venuesJson}:{venuesJson:any}) {

const venuesJsonReady = await venuesJson

return(
<>
Explore {venuesJsonReady.count} models in our catalog

<div style={{
    margin:"20px",
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    alignContent:"space-around"
}}>

{
    venuesJsonReady.data.map((venueItem:any)=>(
        <Link
            href={`/venue/${venueItem.id}`}
            className="w-1/5"
            key={venueItem.id}
        >
            <Card
                venueName={venueItem.name}
                imgSrc={venueItem.picture}
            />
        </Link>
    ))
}

</div>
</>
)
}