import { Route, Routes } from "react-router-dom";
import { PageHome } from "./PageHome";
import { PageContact } from "../contact/PageContact";
import PageAbout from "../about/PageAbout";
import HomeSub from "../../pages/HomeSub";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='' element={<PageHome/>}/>
            <Route path='/homesub' element={<HomeSub/>}/>
            <Route path='/about' element={<PageAbout/>}/>
            <Route path='/contact' element={<PageContact/>}/>
        </Routes>
    )
}