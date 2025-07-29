import Breadcrumb from "../components/Breadcrumb"
import EditProductCart from "../components/EditProductCart"
const ProductEditPage = () => {
    return (
        <>
            <Breadcrumb currentPageTitle="Product Edit" LinkUrl={[{ title: "Product", path: "/product" }]} />
            <h1 className="text-xl font-bold my-8">Product Edit Page</h1>
            <EditProductCart />
        </>
    )
}

export default ProductEditPage