import { useEffect, useState } from "react";
import { cartItemType } from "../utilities/types";

//Any additional columns added to this will mean additional changes will need to be made to both this page and types.ts
const fakeList = [
    {
        id: '1',
        name: 'ship1',
        qty: 5,
        price: 10
    },
    {
        id: '2',
        name: 'ship2',
        qty: 2,
        price: 10
    },
    {
        id: '3',
        name: 'ship3',
        qty: 2,
        price: 20
    },
    {
        id: '4',
        name: 'ship4',
        qty: 2,
        price: 20
    },
]

export default function PurchaseHistoryPage(){
    const [purchaseHistory, showPurchaseHistory] = useState<cartItemType[]>([]);
    const DisplayData=purchaseHistory.map(
        (details) => {
            return(
                <tr className="border-b border-l bg-slate-50">
                    <td className="border-r translate-x-1">{details.id}</td>
                    <td className="border-r translate-x-1">{details.name}</td>
                    <td className="border-r translate-x-1">{details.qty}</td>
                    <td className="border-r translate-x-1">{details.price}</td>
                    <td className="border-r translate-x-1"> {details.price * details.qty} </td>
                </tr>
            )
        }
    )

    useEffect(() => {
        showPurchaseHistory(fakeList); //Will eventually replace this with a list loaded from the database
    }, []);

    return(
        <>
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-4xl font-bold">Past Transactions</h1>
            </div>
            <div>
                <select className="rounded-sm bg-slate-50">
                    <option className="bg-slate-50">Item ID</option>
                    <option className="bg-slate-50">Item Name</option>
                </select>
                <select className="rounded-sm bg-slate-50">
                    <option>Price Ascending</option>
                    <option>Price Descending</option>
                </select>
            </div>
            <div className="flex flex-col items-center mt-2">
            <table className="table-fixed">
                <thead className="border-b text-left">
                    <tr className="text-xl">
                        <th scope="col" className="w-1/3 translate-x-1">Item ID</th>
                        <th scope="col" className="w-1/3 translate-x-1">Item Name</th>
                        <th scope="col" className="w-1/12 translate-x-1">QTY</th>
                        <th scope="col" className="w-1/12 translate-x-1">Price</th>
                        <th scope="col" className="w-1/12 translate-x-1">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>

        </div>
        </>
    );
}