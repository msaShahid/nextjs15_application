import Link from "next/link";

export default function ArchivedNotification(){
    return (
        <>
         <div className="flex flex-col space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                <h5 className="text-lg font-bold">Notification List</h5>
                <Link href={`/complex-dashboard`}>Back</Link>
                </div>
            </div>
        </>

    )
}