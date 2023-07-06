import Link from "next/link";

import GoogleLogin from "./components/google/google";

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

          <div>
            <Link href={"/login"}>
              Login
            </Link>
          </div>
          <div>
            <Link href={"/signup"}>
              Signup
            </Link>
          </div>
          <div>
            <GoogleLogin />
          </div>
        </div>
      </div>
    </main>
  )
}
