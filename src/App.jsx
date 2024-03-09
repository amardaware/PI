import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import RmCategory from "./Pages/Master/RmCategory";

function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<RmCategory />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
