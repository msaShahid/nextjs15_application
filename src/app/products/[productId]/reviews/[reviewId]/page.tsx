import { notFound } from "next/navigation";

export default async function ProductReviews({
    params,
}: {
    params: Promise<{productId: string ,reviewId: string}>
})
{
    const {productId,reviewId} = await params;
    if(parseInt(reviewId) > 200){
        return notFound();
    }
    return <h1 >Reviews {reviewId} of Product {productId}</h1>;
}