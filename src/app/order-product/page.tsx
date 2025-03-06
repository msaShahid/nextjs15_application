"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter()

    const handleOrder = () => {
        console.log('placing your order!')
        router.push('/')
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Order Product</h1>
                <p className="text-lg text-gray-600 mb-4 text-center">
                    Ready to place your order? Click the button below to proceed.
                </p>
                <div className="flex justify-center">
                    <button 
                        onClick={handleOrder} 
                        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    )
}
