import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import RmCategory from "./Pages/Master/RmCategory";
import RmRoom from "./Pages/Master/RmRoom";
import RmServiceHead from "./Pages/Master/RmServiceHead";
import PhotoId from "./Pages/Master/PhotoId";
import Profession from "./Pages/Master/Profession";
import LodgingItem from "./Pages/Master/LodgingItem";
import Nationality from "./Pages/Master/Nationality";
import OnlineBookingHead from "./Pages/Master/OnlineBookingHead";
import RmBookEntry from "./Pages/DailyTransaction.jsx/RmBookEntry";
function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          {/* Mater Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<RmCategory />} />
          <Route path="/Room" element={<RmRoom />} />
          <Route path="/RoomService" element={<RmServiceHead />} />
          <Route path="/PhotoId" element={<PhotoId />} />
          <Route path="/Profession" element={<Profession />} />
          <Route path="/LodgingItem" element={<LodgingItem />} />
          <Route path="/Nationality" element={<Nationality />} />
          <Route path="/OnlineBooking" element={<OnlineBookingHead />} />
          {/* Daily Transaction Routes */}
          <Route path="/RoomBooking" element={<RmBookEntry />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
