"use client";
import { usePathname } from "next/navigation";

export default function NotFound(){
    const pathname =usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    return (
        <>
        <h2>Review {reviewId} Not Found for product {productId} </h2>
        </>
    );
}