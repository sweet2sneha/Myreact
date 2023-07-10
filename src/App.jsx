import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Navbarapp from "./components/navbar";
import Footermy from "./components/Footer";

function App(){
    return (
        <BrowserRouter>
            <Navbarapp/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
            <Footermy/>
        </BrowserRouter>
    )
}
export default App