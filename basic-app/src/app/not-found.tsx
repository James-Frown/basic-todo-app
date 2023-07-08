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
                        The page you were looking for dosnt exist!
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