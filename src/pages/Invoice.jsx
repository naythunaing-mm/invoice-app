import InvoiceList from "../components/InvoiceList"
import Breadcrumb from "../components/Breadcrumb"
const Invoice = () => {
    return (
        <>
            <Breadcrumb currentPageTitle="Invoice" />
            <InvoiceList />
        </>
    )
}
export default Invoice