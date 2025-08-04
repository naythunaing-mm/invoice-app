import { useForm } from 'react-hook-form';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json())
const SaleForm = () => {
    const { data, isLoading } = useSWR(`${import.meta.env.VITE_API_URL}/products`, fetcher);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleForm = async (data) => {
        console.log(data);
    };

    const inputBase =
        "shadow-xs w-full bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

    return (
        <>
            <div className="shadow-sm p-5 my-4">
                <form onSubmit={handleSubmit(handleForm)} id="handleForm">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                        <div className="col-span-1">
                            <label className={`${errors.product_id ? 'text-red-600' : 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'}`}>SELECT YOUR PRODUCT</label>
                            <select
                                {...register("product_id", { required: true })}
                                className={`${errors.product_id ? ' border-red-600 focus:ring-red-600 focus:border-red-600 dark:focus:ring-red-600 dark:focus:border-red-600' : ''} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
                                <option value="">Select product</option>
                                {
                                    isLoading ? (
                                        <option>Loading...</option>
                                    ) : Array.isArray(data) ? (
                                        data.map((product) => (
                                            <option key={product.id} value={product.id}>
                                                {product.product_name}
                                            </option>
                                        ))
                                    ) : (
                                        <option>No products available</option>
                                    )
                                }

                            </select>
                            {errors.product_id && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="col-span-1">
                            <label className={`${errors.price ? 'text-red-600' : 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'}`}>PRICE</label>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                className={`${inputBase} ${errors.price ? 'border-red-600 focus:border-red-600 focus:ring-red-600' : 'border-gray-300'}`}
                            />
                            {errors.price && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="col-span-1 h-full">
                            <button
                                type="submit"
                                className="text-white bg-blue-700 w-full h-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Add Product
                            </button>
                        </div>
                    </div>

                </form >
            </div>
        </>
    )
}
export default SaleForm