"use client"
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
      <main className={styles.main}>
        <div className={styles.div}>
        <h1>hello world</h1>
        <Link href="/about">go to about page</Link><br/>
        <Link href="/login">go to login page</Link>
        <br/>
        <br/>
        <button onClick={()=>router.push("./about")}>go to about</button>
        <br/>
        <button onClick={()=>router.push("./login")}>go to login</button>
        </div>
      </main>
  );
}
