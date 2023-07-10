"use client"

import Link from "next/link";

import { useRouter } from 'next/navigation';

import { useState } from "react";

import { auth, db } from "@/config/firebase";

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { addDoc, collection } from 'firebase/firestore'

export default function Signup() {

    const [name, setName] = useState("");

    const [surname, setSurname] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [helper, setHelper] = useState("");

    const usersCollectionRef = collection(db, "users");

    const todosCollectionRef = collection(db, "todos");

    const { push } = useRouter();

    const handleHelper = () => {
        return helper;
    };

    const handleRouteDashboard = () => {
        console.log("user redirected");
        push("/dashboard");
    };

    const handleSignup = async () => {
        console.log("Email: " + email + " Password: " + password);
        try {
            if (email !== null && password.length > 5) {
                console.log("attempted signup");
                await createUserWithEmailAndPassword(auth, email, password);
                console.log("User signup Success");
                handleNewUser();
                handleNewTodo();
                handleRouteDashboard();
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

    const handleNewUser = async () => {

        if (auth.currentUser !== null) {
            console.log("UID: " + auth.currentUser.uid);
            console.log("Name: " + name + " Surname: " + surname);
            try {
                await addDoc(usersCollectionRef, {
                    Name: name,
                    Surname: surname,
                    Email: email,
                    UID: auth.currentUser.uid,
                    TotalPoints: 0
                });
            } catch (err) {
                console.log(err);
                console.log("Opps, there was an error adding a new user!");
            }
        } else {
            console.log("User signup Failed");
        }
    };

    const handleNewTodo = async () => {
        if (auth.currentUser !== null) {
            try {
                await addDoc(todosCollectionRef, {
                    Title: "Template - Title",
                    Description: "Template - Description",
                    Points: 0,
                    Status: false,
                    UID: auth.currentUser.uid
                });
            } catch (err) {
                console.log(err);
                console.log("Opps, there was an error adding a new todo!");
            }
        } else {
            console.log("User signup Failed");
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
                        SignUp Page
                    </h1>
                </div>
                <div className="text-black p-4 m-4 flex justify-center content-center text-center text-m font-meduim">
                    {handleHelper()}
                </div>
                <div>
                    <div>
                        <input
                            className="text-white bg-black rounded p-4 m-4 flex justify-center content-center text-center "
                            placeholder="Name"
                            onChange={
                                (e) => setName(e.target.value)
                            } />
                        <input
                            className="text-white bg-black rounded p-4 m-4 flex justify-center content-center text-center "
                            placeholder="Surname"
                            onChange={
                                (e) => setSurname(e.target.value)
                            } />
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
                    <button
                        onClick={handleSignup}
                        className="text-white bg-black rounded p-4 m-4 flex justify-center content-center text-center ">
                        SignUp
                    </button>
                </div>
            </div>
        </main>
    )
};

