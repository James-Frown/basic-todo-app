"use client"

import Link from "next/link";

import Logout from "../logout/logout";
import { collection, getDocs, doc } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { useEffect, useState } from "react";

export default function Dashboard() {

    const [todoList, setTodoList] = useState([] as any);

    const [isDone, setIsDone] = useState(false);

    const authUser = auth.currentUser;

    const todoCollectionRef = collection(db, "todos");

    const getTodoList = async () => {
        try {
            const data = await getDocs(todoCollectionRef);
            const modifiedData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            console.log("Data Has been rendered and modified!")

            setTodoList(modifiedData);
            console.log(modifiedData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTodoList();
    });

    return (
        <main className="">
            <div className="">
                <div>
                    <div>
                        {<Logout />}
                    </div>
                    <div>
                        <Link href={"/settings"}>Settings</Link>
                    </div>
                </div>
                <div>
                    <h1>
                        Dashboard Page
                    </h1>
                </div>
                <div>
                    {todoList.map((todo) => {
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
                            if (authUser.uid === todo.UID) {
                                return (
                                    <>
                                        <h1 style={{ color: todo.Status ? "green" : "red" }}>
                                            {todo.Title}
                                        </h1>
                                        <h4>
                                            {todo.Description}
                                        </h4>
                                        <h2>
                                            {todo.Points} Points
                                        </h2>
                                        <label>
                                            <input type='checkbox'
                                                checked={todo.Status}
                                                onChange={(e) => {
                                                    setIsDone(e.target.checked);
                                                    console.log(isDone);
                                                }
                                                }
                                            />
                                            Done
                                        </label>
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
