"use client"

import Link from "next/link";

import { useRouter } from 'next/navigation';

import { useState } from "react";

import { auth } from "@/config/firebase";

import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [helper, setHelper] = useState("");

    const { push } = useRouter();

    const handleHelper = () => {
        return helper;
    };

    const handleRoute = () => {
        console.log("user redirected");
        push("/dashboard");
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
                    <Link href={"."} className="text-white bg-black rounded p-4 m-4 flex justify-center content-center text-center ">
                        Back
                    </Link>
                </div>
                <div className="text-black p-4 m-4 flex justify-center content-center text-center text-xl font-black">
                    <h1>
                        Login Page
                    </h1>
                </div>
                <div>
                    <div className="text-black p-4 m-4 flex justify-center content-center text-center text-m font-meduim">
                        {handleHelper()}
                    </div>
                    <div>
                        <input
                            className="text-white bg-black rounded p-4 m-4 flex justify-center content-center text-center "
                            required
                            placeholder="Email..."
                            type="email"
                            onChange={
                                (e) => setEmail(e.target.value)
                            } />
                        <input
                            className="text-white bg-black rounded p-4 m-4 flex justify-center content-center text-center "
                            required
                            minLength={6}
                            placeholder="Password..."
                            type="password"
                            onChange={
                                (e) => setPassword(e.target.value)
                            } />
                    </div>
                    <div>
                        <button
                            onClick={handleLogin}
                            className="text-white bg-black rounded p-4 m-4 flex justify-center content-center text-center ">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
};
