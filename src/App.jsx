import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CamperDetailsPage from "./pages/CamperDetailsPage/CamperDetailsPage.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import { Provider } from "react-redux";
import store from "./redax/store.js";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/campers/:id" element={<CamperDetailsPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
