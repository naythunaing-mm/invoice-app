
import useSWR from "swr";
import ProductSkeletonLoader from "./ProductSkeletonLoader";
import ProductRow from "./ProductRow";

const fetcher = (...args) => fetch(...args).then(res => res.json())
const ProductList = () => {
    const { data, isLoading } = useSWR(`${import.meta.env.VITE_API_URL}/products`, fetcher);
    return (<>
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
                    {isLoading ? (
                        <ProductSkeletonLoader />
                    ) : (
                        data.map((item) => (
                            <ProductRow key={item.id} product={item} isLoading={isLoading} />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    </>)
}
export default ProductList