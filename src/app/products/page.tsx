import Link from "next/link"
export default function ProductList(){
    const productId = 11;
    return (
        <>
            <div className="flex flex-col gap-2 p-8">
                <Link href="/" >Home</Link>
                <h3 className="text-blue-500 font-bold">
                    <Link href="/products/1">Product 1</Link>
                </h3>
                <h3 className="text-blue-500 font-bold">
                    <Link href="/products/">Product 2</Link>
                </h3>
                <h3 className="text-blue-500 font-bold">
                    <Link href={`/products/${productId}`}>Product {productId}</Link>
                </h3>
   
            </div>
        </>
    )
}