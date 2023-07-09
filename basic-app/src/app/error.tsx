"use client";

// to make an agrgument for typescript you need to declare types
// create an interface first
interface ErrorPageProps {
    error: Error,
    reset: () => void,
}

export default function Error({ error, reset }: ErrorPageProps) {
    return (
        <>
            <div>
                <div>
                    <h1>
                        Error,
                    </h1>
                    <p>
                        Something Went Wrong...
                    </p>
                </div>
                <div>
                    <button onClick={reset}>
                        Try Again
                    </button>
                </div>
            </div>
        </>
    );
};