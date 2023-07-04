"client";

import Link from "next/link";

export default function Home() {

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
                        Dashboard
                    </h1>
                </div>
            </div>
        </main>
    )
}
