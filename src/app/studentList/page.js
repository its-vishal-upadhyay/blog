import Link from "next/link";

export default function studentList() {
  return (
    <div>
      <h1>studentList</h1>
      <li>
        <Link href="/studentList/anil">anil</Link>
      </li>
      <li>
        <Link href="/studentList/sakil">sakil</Link>
      </li>
      <li>
        <Link href="/studentList/vakil">vakil</Link>
      </li>
      <li>
        <Link href="/studentList/jamil">jamil</Link>
      </li>
    </div>
  )
}


