"use client"
import Link from "next/link";
import './login.css'
import { usePathname } from "next/navigation";
export default function layout({children}){
    const pathName = usePathname();
    return(
        <div>
           { pathName !== "/login/loginTeacher" ?
            <ul className="layout-menu">
                <li>
                    <h4>login Navbar</h4>
                </li>
                <li>
                    <Link href="/login">main login</Link>
                </li>
                <li>
                    <Link href="/login/loginStudent">loginStudent</Link>
                </li>
                <li>
                    <Link href="/login/loginTeacher">loginTeacher</Link>
                </li>
            </ul>
            :null
}
            {children}
        </div>
    )
}