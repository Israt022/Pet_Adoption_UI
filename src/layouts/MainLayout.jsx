import { Outlet } from "react-router";
import Navbar from "./Navbar";
import PageLayout from "./PageLayout";

const MainLayout = () => {
    return (
        <>
            <Navbar/> 
            <Outlet/> 
            <PageLayout/> 
        </>
    );
};

export default MainLayout;