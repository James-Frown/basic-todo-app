"use client"

import { auth, googleProvider } from "@/config/firebase";

import { signInWithPopup } from 'firebase/auth';

import { useRouter } from 'next/navigation';

export default function GoogleLogin() {
    
    const { push } = useRouter();

    const handleRoute = () => {
        console.log("user redirected");
        push("/dashboard");
    };

    const handleGoogle = async () => {
        try {
            console.log("attempted google login");
            await signInWithPopup(auth, googleProvider);
            console.log("add new user to users collection!");
            console.log("User google login Success");
            handleRoute();
        } catch (err) {
            console.log(err);
            console.log("User google login Failed");
        }
    };

    return (
        <main className="">
            <div className="">
                <div>
                    <button onClick={handleGoogle}>
                        Login with google
                    </button>
                </div>
            </div>
        </main>
    )
};
