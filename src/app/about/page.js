'use client'
import Link from "next/link";
import { useState } from "react";

const About =()=>{
    const [Name, setName] = useState("anil")

  const apple=()=>{
    setName("sidhu")
  }

  const innercomp=()=>{
    return(
      <h1>inner comp</h1>
    )
  }
    return(
        <div>
            <h1>{Name}About</h1>
            <button onClick={()=>apple()}>click me</button>
            <br/>
            <Link href="/">go to home page</Link>
            <br/>
            <Link href="./about/aboutStudent">go to AboutStudent page</Link>
            <br/>
            <Link href="./about/aboutTeacher">go to AboutTeacher page</Link>
        </div>
    )
}
export default About;