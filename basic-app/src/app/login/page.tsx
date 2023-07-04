"use client"

import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/router";

import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Home() {

  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [helper, setHelper] = useState("");

  const [page, setPage] = useState("");

  const handleHelper = () => {
    return helper;
  };

  const handleRoute = () => {
    router.push(page);
  };

  const handleLogin = async () => {
    console.log("Email: " + email + " Password: " + password);
    try {
      if (email !== null && password.length > 5) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User Login Success");
        setPage("/dashboard");
        handleRoute();
      } else {
        if (email === "") {
          setHelper("Email Not Entered!");
        } else {
          if (password.length < 1) {
            setHelper("Password Not Entered!");
          } else {
            if (password.length < 6) {
              setHelper("Password Is Too Short!");
            }
          }
        }
      }
    } catch (err) {
      setHelper("Wrong Email or Password!");
      console.log(err);
      console.log("User Login Failed");
    }
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
            {handleHelper()}
          </div>
          <div>
            <input
              required
              placeholder="Email..."
              type="email"
              onChange={
                (e) => setEmail(e.target.value)
              } />
            <input
              required
              minLength={6}
              placeholder="Password..."
              type="password"
              onChange={
                (e) => setPassword(e.target.value)
              } />
          </div>
          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </main>
  )
}
