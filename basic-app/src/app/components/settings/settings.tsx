"use client"

import Link from "next/link";
import Logout from "../logout/logout";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase";

export default function Settings() {

    const [usersList, setUsersList] = useState([] as any);

    const authUser = auth.currentUser;

    const [editUser, setEditUser] = useState(false);

    const [newSurname, setNewSurname] = useState("");

    const [newName, setNewName] = useState("");

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

    function editUserProfile() {
        setEditUser(true);
    }

    const saveUserProfile = async (id) => {
        const usersDoc = doc(db, "users", id)
        setEditUser(false);
        try {
            await updateDoc(usersDoc, {
                Name: newName,
                Surname: newSurname
            });
        } catch (error) {
            console.log(error);
        }
    }

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
                        if (editUser === false) {
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
                                            <div>
                                                <p>
                                                    Total Points: {user.TotalPoints}
                                                </p>
                                                <p>
                                                    Name: {user.Name}
                                                </p>
                                                <p>
                                                    Surname: {user.Surname}
                                                </p>
                                                <p>
                                                    Email: {user.Email}
                                                </p>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={editUserProfile}>
                                                    Edit
                                                </button>
                                            </div>
                                        </>
                                    )
                                }
                            }
                        } else {
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
                                            <div>
                                                <p>
                                                    Total Points: {user.TotalPoints}
                                                </p>
                                                <input
                                                    placeholder={user.Name}
                                                    onChange={
                                                        (e) => setNewName(e.target.value)
                                                    }
                                                />
                                                <input
                                                    placeholder={user.Surname}
                                                    onChange={
                                                        (e) => setNewSurname(e.target.value)
                                                    }
                                                />
                                                <p>
                                                    Email: {user.Email}
                                                </p>
                                            </div>

                                            <div>
                                                <button
                                                    onClick={() => saveUserProfile(user.id)}>
                                                    Save
                                                </button>
                                            </div>

                                        </>
                                    )
                                }
                            }
                        }

                    })}
                </div>
            </div>
        </main>
    );
};

