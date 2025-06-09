import { Outlet } from "react-router";
import Navbar from "./Navbar";
import PageLayout from "./PageLayout";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar/> 
            <Outlet/> 
            <Footer/> 
        </>
    );
};

export default MainLayout;