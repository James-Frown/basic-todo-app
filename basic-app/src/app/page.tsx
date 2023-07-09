import Link from "next/link";

import GoogleLogin from "./components/google/google";

export default function Home() {
  return (
    <main className="">
      <div className="">
      <div className="text-black p-4 m-4 flex justify-center content-center text-center text-xl font-black">
          <h1>
            Landing Page
          </h1>
        </div>
      </div>
      <div className="">
        <div className="">

          <div>
            <Link href={"/login"} className="text-white bg-black rounded p-4 m-4 flex justify-center content-center text-center ">
              Login
            </Link>
          </div>
          <div >
            <Link href={"/signup"} className="text-white bg-black rounded p-4 m-4 flex justify-center content-center text-center ">
              Signup
            </Link>
          </div>
          <div className="text-white bg-black rounded p-4 m-4 flex justify-center content-center text-center ">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </main>
  )
}
