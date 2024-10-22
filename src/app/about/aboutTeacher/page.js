"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
const AboutTeacher = () => {
    const router = useRouter();
    return (
      <div>
        <h1>about Teacher</h1>
        <br/>
        <Link href="/">go to home page</Link>
        <br/>
        <Link href="/about">go to about page</Link>
        <br/>
        <button onClick={()=>router.push("/about")}>go to about page</button>
      </div>
    )
  }
  
  export default AboutTeacher
  