import { useForm } from 'react-hook-form';
import SaleForm from '../sale-module/saleForm';
import InvoiceTable from './InvoiceTable';

const ProductForm = () => {
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


    const generateInvoiceNumber = (prefix = 'INV') => {
        const now = new Date();
        const year = now.getFullYear().toString().slice(-2);
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const random = Math.floor(1000 + Math.random() * 9000);
        return `${prefix}-${year}${month}${day}-${random}`;
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleForm)} id="handleForm">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
                    <div className="col-span-1">
                        <label className={`${errors.invoice_id ? 'text-red-500' : 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'}`}>INVOICE ID</label>
                        <input
                            type="text"
                            defaultValue={generateInvoiceNumber()}
                            {...register("invoice_id", { required: true })}
                            className={`block w-full rounded-lg shadow-sm sm:text-sm ${errors.invoice_id ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'} ${inputBase}`}
                            readOnly
                        />
                        {errors.invoice_id && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div className="col-span-1">
                        <label className={`${errors.invoice_id ? 'text-red-500' : 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'}`}>CUSTOMER NAME</label>
                        <input
                            {...register("customer_name", { required: true })}
                            type="text"
                            className={`${inputBase} ${errors.customer_name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
                            placeholder="John Doe"
                        />
                        {errors.customer_name && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div className="col-span-1">
                        <label className={`${errors.invoice_id ? 'text-red-500' : 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'}`}>CUSTOMER EMAIL</label>
                        <input
                            {...register("customer_email", { required: true })}
                            type="email"
                            className={`${inputBase} ${errors.customer_email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
                            placeholder="email@example.com"
                        />
                        {errors.customer_email && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div className="col-span-1">
                        <label className={`${errors.invoice_id ? 'text-red-500' : 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'}`}>INVOICE DATE</label>
                        <input
                            {...register("invoice_date", { required: true })}
                            defaultValue={new Date().toISOString().slice(0, 10)}
                            type="date"
                            className={`${inputBase} ${errors.invoice_date ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
                        />
                        {errors.invoice_date && <span className="text-red-600">This field is required</span>}
                    </div>
                </div>
            </form>
            <SaleForm />
            <InvoiceTable />
            <div className="flex items-center justify-end p-6 space-x-2 rounded-b dark:border-gray-600">
                <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 mx-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                I accept Terms & conditions.
                <button
                    type="submit" form='handleForm'
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Product Submit
                </button>

            </div>
        </>
    );
};

export default ProductForm;
