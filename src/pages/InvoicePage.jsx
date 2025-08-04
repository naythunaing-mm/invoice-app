import InvoiceList from "../components/invoice/InvoiceList"
import Breadcrumb from "../components/Breadcrumb"
const InvoicePage = () => {
    return (
        <>
            <Breadcrumb currentPageTitle="Invoice" />
            <InvoiceList />
        </>
    )
}
export default InvoicePage