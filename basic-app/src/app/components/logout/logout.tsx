"use client"

import { auth } from '@/config/firebase';

import { signOut } from 'firebase/auth'

import { useRouter } from 'next/navigation';

export default function Logout() {

    const { push } = useRouter();

    const handleRoute = () => {
        console.log("User Redirected To Auth Page");
        push("/");
    };

    const LogOut = async () => {
        try {
            await signOut(auth);
            console.log("User Is Logged Out");
            console.log("User Authentication Revoked");
            handleRoute();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div>
                <button onClick={LogOut}>
                    LogOut
                </button>
            </div>
        </>
    )
};
