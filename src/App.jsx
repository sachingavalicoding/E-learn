import { BrowserRouter, Route, Routes } from "react-router";

import { About, Contact, Home } from "./pages";
import Course from "./pages/courses/Course";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
