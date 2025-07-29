import { HiOutlineTrash } from "react-icons/hi";
import { HiPencilAlt } from "react-icons/hi";
import { useState } from "react";
import 'ldrs/react/Trefoil.css'
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { mutate } from "swr";
import ProductSkeletonLoader from "./ProductSkeletonLoader";

const ProductRow = ({ product }) => {
    const [isLoading, setLoading] = useState(false);
    const handleClick = async () => {
        setLoading(true);
        await fetch(`${import.meta.env.VITE_API_URL}/products/${product.id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        setLoading(false);
        toast.success('Successfully toasted!')
        mutate(`${import.meta.env.VITE_API_URL}/products`);
    }

    return (
        <>
            {
                isLoading ?
                    <><ProductSkeletonLoader /></>
                    : <>
                        <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.id}
                            </th>
                            <td className="px-6 py-4">
                                {product.product_name}
                            </td>
                            <td className="px-6 py-4">
                                {product.price}
                            </td>
                            <td className="px-6 py-4">
                                <p>{product.created_at}</p>
                                {/* <p>{data.updated_at}</p> */}
                            </td>
                            <td className="px-6 py-4 flex">
                                <Link to={`/edit-product/${product.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><HiPencilAlt className="w-8 h-5" /></Link> &nbsp;&nbsp;
                                <a onClick={handleClick} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><HiOutlineTrash className="w-8 h-5" /></a>
                            </td>
                        </tr>
                    </>
            }
        </>
    )
}
export default ProductRow