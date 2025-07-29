import { Link } from "react-router-dom";
const NotFoundPage = () => {
    return (
        <>
            <div className="">
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-center">
                    <h1 className="text-9xl font-bold text-gray-300">404</h1>
                    <p className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
                        Page Not Found
                    </p>
                    <p className="text-gray-500 mt-2">
                        Sorry, the page you are looking for does not exist.
                    </p>
                    <Link
                        to="/"
                        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </>
    )
}
export default NotFoundPage