import Breadcrumb from "../components/Breadcrumb"
import CreateProductCart from "../components/CreateProductCart"

const ProductCreatePage = () => {
    return (
        <>
            <Breadcrumb currentPageTitle="Product Create" LinkUrl={[{ title: "Product", path: "/product" }]} />
            <h1 className="text-xl font-bold my-8 dark:text-slate-300">Product Create Page</h1>
            <CreateProductCart />
        </>
    )
}
export default ProductCreatePage