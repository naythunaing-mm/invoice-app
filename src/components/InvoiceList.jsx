import { HiOutlineTrash } from "react-icons/hi";
import { HiPencilAlt } from "react-icons/hi";
const InvoiceList = () => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 last:table-row hidden">
                            <td colSpan={5} scope="row" className="text-center   py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                There is no products
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td className="px-6 py-4">
                                Apple MacBook Pro 17"
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                <p>23 Jun 2025</p>
                                <p>10:00 AM</p>
                            </td>
                            <td className="px-6 py-4 flex">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><HiOutlineTrash className="w-5 h-5" /></a> &nbsp;&nbsp;
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><HiPencilAlt className="w-5 h-5" /></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default InvoiceList