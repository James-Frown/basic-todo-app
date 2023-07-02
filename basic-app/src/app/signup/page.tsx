"client";

import Link from "next/link";

export default function Home() {

  const handleSignup = () => {
    console.log("");
  }

  return (
    <main className="">
      <div className="">
        <div>
          <Link href={"."}>
            Back
          </Link>
        </div>
        <div>
          <h1>
            SignUp Page
          </h1>
        </div>
        <div>
          <div>
            <input placeholder="Name" />
            <input placeholder="Surname" />
            <input placeholder="Email" />
            <input placeholder="Password" />
          </div>
          <button onClick={handleSignup}>
            login
          </button>
        </div>
      </div>
    </main>
  )
}
