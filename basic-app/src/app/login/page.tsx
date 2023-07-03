"use client"

import Link from "next/link";

import { useState } from "react";

import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Home() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setEmail("");
    setPassword("");
    console.log("Email: " + email + " Password: " + password);
  };

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
          <div>
            <input id="E" placeholder="Email" onChange={(e) => {
              setEmail(e);
            }}/>
            <input id="P" placeholder="Password" />
          </div>
          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </main>
  )
}
