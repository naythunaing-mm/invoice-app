import Breadcrumb from "../components/Breadcrumb"
import ProductList from "../components/ProductList"
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProductPage = () => {
    return (
        <>
            <Breadcrumb currentPageTitle="Products" />
            <div className="flex justify-between mt-5 relative">
                <div className="absolute inset-y-0 start-3 flex items-center dark:text-white"><HiOutlineSearch /></div>
                <input type="text" id="simple-search" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search product" required />
                <Link to="/add-product" type="submit" className="p-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add New Product +
                </Link>
            </div>
            <ProductList />
        </>
    )
}
export default ProductPage