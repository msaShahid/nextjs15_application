import { notFound } from "next/navigation";

function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}

export default async function ProductReviews({
    params,
}: {
    params: Promise<{productId: string ,reviewId: string}>
})
{
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Error loading review")
    }

    const {productId,reviewId} = await params;
    if(parseInt(reviewId) > 200){
        return notFound();
    }
    return <h1 >Reviews {reviewId} of Product {productId}</h1>;
}