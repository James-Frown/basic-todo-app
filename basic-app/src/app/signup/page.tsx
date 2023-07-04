"use client"

import Link from "next/link";

import { useState } from "react";

import { auth, googleProvider } from '../../config/firebase';

import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export default function Signup() {

  const [name, setName] = useState("");

  const [surname, setSurname] = useState("");

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
      console.log(name + " " + surname);
      console.log("User googlesignup Success");
      handleRoute();
    } catch (err) {
      setHelper("Opps, there was an issue!");
      console.log(err);
      console.log("User signup Failed");
    }
  };

  const handleSignup = async () => {
    console.log("Email: " + email + " Password: " + password);
    try {
      if (email !== null && password.length > 5) {
        console.log("attempted signup");
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("add new user to users collection!");
        console.log("User signup Success");
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
      console.log("User signup Failed");
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
            SignUp Page
          </h1>
        </div>
        <div>
          {handleHelper()}
        </div>
        <div>
          <div>
            <input
              placeholder="Name"
              onChange={
                (e) => setName(e.target.value)
              } />
            <input
              placeholder="Surname"
              onChange={
                (e) => setSurname(e.target.value)
              } />
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
          <button onClick={handleSignup}>
            SignUp
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

