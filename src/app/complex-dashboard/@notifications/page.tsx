import Link from "next/link";

export default function Notifications(){
    return(
        <>
            <h2 className="text-xl font-semibold">Notification</h2>
            <ul>
                <li><p>Notification 1</p></li>
                <li><p>Notification 2</p></li>
                <li><p>Notification 3</p></li>
                
            </ul>
            <div className="">
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h5 className="text-lg font-bold">Archived notification</h5>
                    <Link href={`/complex-dashboard/archived`}>Archived</Link>
                </div>
            </div>
        </>
    )
}