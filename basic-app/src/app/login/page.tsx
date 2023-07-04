"use client"

import Link from "next/link";

import { useState } from "react";

import { auth, googleProvider } from '../../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [helper, setHelper] = useState("");

  const handleHelper = () => {
    return helper;
  };

  const handleRoute = () => {
    console.log("user redirected");
  };

  const handleGoogle = async () => {
    try {
      console.log("attempted signup");
      await signInWithPopup(auth, googleProvider);
      console.log("add new user to users collection!");
      console.log("User googlesignup Success");
      handleRoute();
    } catch (err) {
      setHelper("Opps, there was an issue!");
      console.log(err);
      console.log("User signup Failed");
    }
  };

  const handleLogin = async () => {
    console.log("Email: " + email + " Password: " + password);
    try {
      if (email !== null && password.length > 5) {
        console.log("attempted login");
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User Login Success");
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
      setHelper("Invalid Email or Password!");
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
        <div>
          <button onClick={handleGoogle}>
            SignUp with google
          </button>
        </div>
      </div>
    </main>
  )
};
