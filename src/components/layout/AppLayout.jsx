
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { NavBar } from "../Navbar";

const AppLayout = () =>{
    return (
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </>

    )
}
export default AppLayout;