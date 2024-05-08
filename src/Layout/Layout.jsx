import { Outlet } from "react-router-dom";
import AdminDashboard from "../AdminDashboard/AdminDashboard";


const Layout = () => {
    return (
        <div>
            <AdminDashboard></AdminDashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;