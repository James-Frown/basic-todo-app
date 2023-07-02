import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-100vw h-100vh items-center justify-between p-24">
      <div className="p-top-10vh z-10 w-100vw items-center justify-center font-mono text-sm lg:flex">
        <div>
          <h1>
            Landing Page
          </h1>
        </div>
      </div>
      <div className="p-top-10vh z-10 w-100vw items-center justify-center font-mono text-sm lg:flex">
        <div className="flex justify-between">
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
