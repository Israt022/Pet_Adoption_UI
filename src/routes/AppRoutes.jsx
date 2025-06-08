import { Route,Routes } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

 const AppRoutes = () => {
    return (
        <Routes>
            <Route element = {<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;