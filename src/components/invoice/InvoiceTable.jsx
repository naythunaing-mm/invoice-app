import useRecordStore from "../../store/useRecordStore"
import InvoiceRow from "./InvoiceRow"

const InvoiceTable = () => {
    const { records } = useRecordStore();

    return (<>
        <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
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
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cost
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Updated At
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {records.length > 0 ? (
                        <>
                            {records.map((record, index) => (
                                <InvoiceRow index={index} key={index} product={record} />
                            ))}

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <td
                                    colSpan={5}
                                    scope="row"
                                    className="text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Total
                                </td>
                                <td className="px-6 py-4">
                                    <p>{records.reduce((a, b) => a + b.cost, 0)}</p>
                                </td>
                            </tr>
                        </>
                    ) : (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 last:table-row hidden">
                            <td
                                colSpan={6}
                                scope="row"
                                className="text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                There is no products
                            </td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div >
    </>)
}
export default InvoiceTable