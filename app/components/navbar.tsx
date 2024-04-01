import Link from "next/link";



export default function NavBar(){

    return(
        <>
        <li>
           <Link href="/about/">About</Link>
        </li>
        <li>
           <Link href="/contact/">Contact</Link>
        </li>
        <li>
           <Link href="/sign_up/">Sign Up</Link>
        </li>
        <li>
           <Link href="/sign_in/">Sign In</Link>
        </li>
        <li>
           <Link href="/Board/">Board</Link>
        </li>
        <li>
           <Link href="/user/id/">users</Link>
        </li>
        </>
    )
}