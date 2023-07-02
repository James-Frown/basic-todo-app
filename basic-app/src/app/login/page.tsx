import Link from "next/link";
import Login from './login';

export default function Home() {

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
            Login Page
          </h1>
        </div>
        <div>
          <Login />
        </div>
      </div>
    </main>
  )
}
