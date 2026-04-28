import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ReservationPage from "./pages/ReservationPage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
