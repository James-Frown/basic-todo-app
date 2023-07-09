import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div>
                <div>
                    <h1>
                        Opps,
                    </h1>
                    <p>
                        There was an error!
                    </p>
                    <p>
                        Your page was not found!
                    </p>
                </div>
                <div>
                    <Link href={"."}>
                        Back
                    </Link>
                </div>
            </div>
        </>
    );
};