import Link from "next/link";





export default function SndNavBar(){

    return(
        <>
        <li>
           <Link href="/add_admin/">Add admin</Link>
        </li>
        <li>
           <Link href="/add_manager/">Add manager</Link>
        </li>
        <li>
           <Link href="/show_profile/">Show profile</Link>
        </li>
        <li>
           <Link href="/update_profile/">Update Profile</Link>
        </li>
        <li>
           <Link href="/log_out/">Log Out</Link>
        </li>
        </>
    )
}