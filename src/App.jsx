import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Instruments from "./pages/instruments";
import Singers from "./pages/singers";
import Trending from "./pages/trending";
import History from "./pages/history";
import Contact from "./pages/contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/singers" element={<Singers />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
