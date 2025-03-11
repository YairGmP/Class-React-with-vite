import { Route, Routes } from "react-router-dom";
import { PageHome } from "./home/PageHome";
import PageContact from "./contact/PageContact";
import PageAbout from "./about/PageAbout";
import HomeSub from "../pages/HomeSub";
import { NotFound } from "./NotFound";
import { PageTrading } from "./dash/PageTrading";
import { PageDash } from "./dash/PageDash";
import { DetallesDash } from "./dash/DetallesDash";
import Detalles_folio from "./folio/Detalles_folio";
import DetallesReceta from "./folio/DetallesReceta";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/homesub" element={<HomeSub />} />
      <Route path="/about" element={<PageAbout />} />
      <Route path="/contact" element={<PageContact />} />
      <Route path="/folio" element={<Detalles_folio />} />
      <Route path="/homesub/:id" element={<DetallesReceta />} />
      <Route path="/dash">
        <Route index element={<PageDash />} />
        <Route path=":id" element={<DetallesDash />} />
        <Route path="trading" element={<PageTrading />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
