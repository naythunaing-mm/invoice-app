import Container from "./Container";
import { Outlet } from "react-router-dom"
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Footer />
        </>
    );
}
export default Layout