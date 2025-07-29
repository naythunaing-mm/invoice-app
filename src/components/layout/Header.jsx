import { HiMoon, HiSun } from "react-icons/hi"
import { useState, useEffect } from "react"
const Header = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };
    return (

        <>
            <header className="my-6 w-full px-2 md:px-4 lg:px-8 max-w-5xl mx-auto">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold dark:text-slate-300">Invoice App</h1>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <label className="inline-flex items-center cursor-pointer mx-4">
                            <input type="checkbox" value="" className="sr-only peer" onClick={toggleDarkMode} />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                            <span className="ms-3 font-medium">{darkMode ? <HiSun className="text-4xl text-gray-400" /> : <HiMoon className="text-4xl" />}</span>
                        </label>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header