"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
const loginteacher = () => {
    const router =useRouter();
  return (
    <div>
      <h1>login teacher</h1>
      <Link href="/login">go to login</Link>
      <br/>
      <button onClick={()=>router.push("/login")}>go to login</button>
    </div>
  )
}

export default loginteacher
