import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Home } from "./pages";
import Course from "./pages/courses/Course";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
