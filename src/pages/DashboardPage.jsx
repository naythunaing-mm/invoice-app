import ModuleBtn from "../components/ModuleBtn"
import { HiOutlineDatabase, HiPrinter, HiOutlineDesktopComputer } from "react-icons/hi";
const DashboardPage = () => {
    return (
        <>
            <h4 className="mt-2 dark:text-slate-300 my-5">MMSIT Stoftware</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className="cols-span-1">
                    <ModuleBtn name="Product Module" url="/product" icon={<HiOutlineDatabase className="size-16" />} />
                </div>
                <div className="cols-span-1">
                    <ModuleBtn name="Sale Module" url="/sale-module" icon={<HiOutlineDesktopComputer className="size-16" />} />
                </div>
                <div className="cols-span-1">
                    <ModuleBtn name="Invoice Module" url="/invoice" icon={<HiPrinter className="size-16" />} />
                </div>
            </div>
        </>
    )
}
export default DashboardPage