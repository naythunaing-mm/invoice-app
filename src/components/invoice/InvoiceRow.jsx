import { Link } from "react-router-dom";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import useRecordStore from "../../store/useRecordStore";

const InvoiceRow = ({ product, index }) => {
    console.log(product);
    const { removeRecord, changeQuantity } = useRecordStore();
    const handleReduceRecord = () => {
        changeQuantity(product.id, -1);
    }

    const handleAddRecord = () => {
        changeQuantity(product.id, 1);
    }

    const handleRemoveRecord = () => {
        removeRecord(product.id);
    }

    return (<>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
            </th>
            <td className="px-6 py-4">
                {product.product.product_name}
            </td>
            <td className="px-6 py-4">
                {product.product.price}
            </td>
            <td className="px-6 py-4">
                <p>
                    <button className="px-2 rounded-md bg-slate-200 border hover:text-blue-800" onClick={handleReduceRecord}>−</button>
                    &nbsp;&nbsp;{product.quantity}&nbsp;&nbsp;
                    <button className="px-2 rounded-md bg-slate-200 border hover:text-blue-800" onClick={handleAddRecord}>+</button>
                </p>
            </td>
            <td className="px-6 py-4">
                <p>{product.cost}</p>
            </td>
            <td className="px-6 py-4">
                <p>{product.created_at}</p>
            </td>
            <td className="px-6 py-4 flex">
                <a onClick={handleRemoveRecord} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><HiOutlineTrash className="w-8 h-5" /></a>
            </td>
        </tr>
    </>)
}
export default InvoiceRow