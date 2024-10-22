"use client"
import Link from "next/link"

const page = () => {
  return (
    <div>
      <h1>login</h1>
      <br/>
      <Link href="/">go to home page</Link>
      <br/>
            <Link href="./login/loginStudent">go to loginStudent page</Link>
            <br/>
            <Link href="./login/loginTeacher">go to loginTeacher page</Link>
    </div>
  )
}

export default page
