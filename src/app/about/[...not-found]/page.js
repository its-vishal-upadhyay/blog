import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <h1>this about page is not found</h1>
            <p>go to home page <Link href="/">click me</Link></p>
        </div>
    )
}