import Nav from "./pages/Nav";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <main>
            <Nav />
            <Outlet/>
        </main>
    )
}