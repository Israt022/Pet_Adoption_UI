import { Route,Routes } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../components/Home/About";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Registrations/ActivateAccount";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import UpdateProfile from "../components/Dashboard/Profile/UpdateProfile";
import PetDetail from "../pages/PetDetail";
import Cart from "../pages/Cart";
import Order from "../pages/Order";
import PaymentSuccess from "../pages/PaymentSuccess";
import AddPets from "../pages/AddPets";
import Reviews from "../pages/Reviews"
import Pets from "../pages/Pets";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPasswordConfirm from "../pages/ResetPasswordConfirm";

 const AppRoutes = () => {
    return (
        <Routes>
            <Route element = {<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="activate/:uid/:token" element={<ActivateAccount />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
                <Route path="shop/:petId" element={<PetDetail />} />
                
            </Route>
            {/* Private Route  */}
            <Route 
                path="dashboard" 
                element={
                    <PrivateRoute>
                        <DashboardLayout/>
                    </PrivateRoute>
                }
            >
                <Route 
                    index 
                    element= {<Dashboard/>}
                />
                <Route 
                    path="profile"
                    element= {<Profile/>}
                />
                <Route 
                    path="update-profile"
                    element= {<UpdateProfile/>}
                />
                <Route 
                    path="cart"
                    element= {<Cart/>}
                />
                <Route 
                    path="orders"
                    element= {<Order/>}
                />
                <Route 
                    path="payment/success/"
                    element = {<PaymentSuccess/>}
                />
                <Route 
                    path="pets/add/"
                    element = {<AddPets/>}
                />
                <Route 
                    path="review/"
                    element = {<Reviews/>}
                />
                <Route 
                    path="pets/"
                    element = {<Pets/>}
                />
            </Route>
        </Routes>
    );
};

export default AppRoutes;