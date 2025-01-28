export default async function ProductReviews({
    params,
}: {
    params: Promise<{productId: string ,reviewId: string}>
})
{
    const {productId,reviewId} = await params;
    return <h1 >Reviews {reviewId} of Product {productId}</h1>;
}