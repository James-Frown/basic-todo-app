import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <div>
          <h1>
            Landing Page
          </h1>
        </div>
      </div>
      <div className="">
        <div className="">
          <Link href={"/login"}>
            Login
          </Link>
          <Link href={"/signup"}>
            Signup
          </Link>
        </div>
      </div>
    </main>
  )
}
