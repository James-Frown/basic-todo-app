"use client"

import Link from "next/link";
import Logout from "../logout/logout";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/config/firebase";

export default function Settings() {

    const [usersList, setUsersList] = useState([] as any);

    const authUser = auth.currentUser;

    const userCollectionRef = collection(db, "users");

    const getUsersList = async () => {
        try {
            const data = await getDocs(userCollectionRef);
            const modifiedData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            console.log("Data Has been rendered and modified!")

            setUsersList(modifiedData);
            console.log(modifiedData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUsersList();
    });

    return (
        <main className="">
            <div className="">
                <div>
                    {<Logout />}
                </div>
                <div>
                    <Link href={"/dashboard"}>
                        Back
                    </Link>
                </div>
                <div>
                    <h1>
                        Settings Page
                    </h1>
                </div>
                <div>
                    {usersList.map((user) => {
                        if (authUser === null) {
                            return (
                                <>
                                    <div>
                                        <h1>
                                            User has no auth!
                                        </h1>
                                    </div>
                                </>
                            )
                        } else {
                            if (authUser.uid === user.UID) {
                                return (
                                    <>
                                        <p>
                                            Name: {user.Name}
                                        </p>
                                        <p>
                                            Surname: {user.Surname}
                                        </p>
                                        <p>
                                            Email: {user.Email}
                                        </p>
                                        <p>
                                            Total Points: {user.TotalPoints}
                                        </p>
                                    </>
                                )
                            }
                        }
                    })}
                </div>
            </div>
        </main>
    );
};

