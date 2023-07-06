"client";

import Link from "next/link";

import Logout from "../logout/logout";

export default function Dashboard() {
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
            </div>
        </main>
    );
};
