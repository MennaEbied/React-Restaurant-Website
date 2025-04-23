import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
          <ErrorBoundary>
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </ErrorBoundary>   
    </BrowserRouter>
  );
};

export default App;
