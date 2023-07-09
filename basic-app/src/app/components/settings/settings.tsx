"use client"

import Link from "next/link";
import Logout from "../logout/logout";

export default function Settings() {
    return (
        <main className="">
            <div className="">
                <div>
                    <Link href={"/dashboard"}>
                        Back
                    </Link>
                </div>
                <div>
                    {<Logout />}
                </div>
                <div>
                    <h1>
                        Settings Page
                    </h1>
                </div>
            </div>
        </main>
    );
};