import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home";
import ListContainer from "./pages/ListContainer";
import Attendence from "./pages/Attendence";
import AddNotes from "./pages/Addnotes";

export default function App() {
  return (
    <div className="container-fluid p-0 m-0 d-flex flex-column vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<ListContainer />} />
        <Route path="/attendence" element={<Attendence />} />
        <Route path="/add-notes" element={<AddNotes />} />
      </Routes>
      <Footer />
    </div>
  );
}
