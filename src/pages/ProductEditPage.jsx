import Breadcrumb from "../components/Breadcrumb"
import EditProductCart from "../components/product/EditProductCart"
const ProductEditPage = () => {
    return (
        <>
            <Breadcrumb currentPageTitle="Product Edit" LinkUrl={[{ title: "Product", path: "/product" }]} />
            <h1 className="text-xl font-bold my-8 dark:text-slate-300">Product Edit Page</h1>
            <EditProductCart />
        </>
    )
}

export default ProductEditPage