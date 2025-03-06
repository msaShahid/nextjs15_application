"use client";

export default function ErrorBoundary({error}: {error: Error}){
    return(
        <>
            <p className="font-bold text-red-500 py-4 px-4">Error in Reviews ID</p>
            <p>{error.message}</p>
        </>
    )
}