import { useForm } from "react-hook-form";
import { useState } from "react";
import { Trefoil } from 'ldrs/react'
import 'ldrs/react/Trefoil.css'
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateProductCart = () => {
    const { register, handleSubmit, formState: { errors }, reset
    } = useForm();

    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleForm = async (data) => {
        setLoading(true);
        await fetch(`${import.meta.env.VITE_API_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product_name: data.product_name, price: data.price, created_at: new Date().toISOString() }),
        })
        setLoading(false);
        toast.success('Successfully toasted!')
        reset();
        if (data.nextPage) {
            navigate("/product");
        }

    };

    return (
        <>
            {
                isLoading ?
                    <div className="w-full flex justify-center h-screen m-auto"><Trefoil
                        size="40"
                        stroke="4"
                        strokeLength="0.15"
                        bgOpacity="0.1"
                        speed="1.4"
                        color="black"
                    /></div> :

                    <div className="border p-5 flex flex-col items-center align-center">
                        <form onSubmit={handleSubmit(handleForm)} className="w-full md:w-1/2 lg:w-1/2">
                            <div className="relative z-0 w-full mb-5 group">
                                <input {...register("product_name", { required: true })} type="text" id="floating_email" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none ${errors.name ? 'border-red-500' : ''} focus:border-blue-600 peer`} placeholder="" />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                                {errors.product_name && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input {...register("price", { required: true })} type="text" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Price</label>
                                {errors.price && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="flex items-center mb-4">
                                <input {...register("term")} id="term" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="term" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                            </div>
                            <div className="flex items-center">
                                <input {...register("nextPage")} id="nextPage" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="nextPage" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pass Next Page</label>
                            </div>

                            <div className="flex items-center justify-end gap-2">
                                <button type="submit" className="text-white bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Cancel</button>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}
export default CreateProductCart