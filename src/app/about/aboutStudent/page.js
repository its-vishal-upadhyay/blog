"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
const AboutStudent = () => {
    const router =useRouter();
  return (
    <div>
      <h1>about student</h1>
      <Link href="/about">go to about</Link>
      <br/>
      <button onClick={()=>router.push("/about")}>go to about</button>
    </div>
  )
}

export default AboutStudent
