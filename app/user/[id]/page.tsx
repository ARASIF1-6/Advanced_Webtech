import SndNavBar from "@/app/second_nav/navbar";




export default function Id({ params }: { params: { id: string }})
{
   return <div> Profile: {params.id}  <SndNavBar/> </div>
}