import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CamperDetailsPage from "./pages/CamperDetailsPage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/campers/:id" element={<CamperDetailsPage />} />
    </Routes>
  );
}

export default App;
