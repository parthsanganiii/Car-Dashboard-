import Sidebar from "./components/common/Sidebar"
import { Routes, Route, useLocation } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Assets from "./pages/Assets"
import Booking from "./pages/Booking"
import SellCars from "./pages/SellCars"
import Calender from "./pages/Calender"
import Service from "./pages/Service"
import Messages from "./pages/Messages"
import Settings from "./pages/Settings"
import LogOut from "./pages/LogOut"
import LogIn from "./pages/LogIn"
import Signup from "./pages/Signup"
import BuyCars from "./pages/BuyCars"
import Notification from "./pages/Notification"
import ChangePassword from "./pages/ChangePassword"
import ForgotPassword from "./pages/ForgotPassword"

function App() {
  const location = useLocation();
  // console.log('location', location)
  return (
    <>
      <div className="flex h-screen bg-white dark:bg-[#1F2128] text-[#808191] overflow-hidden">

        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 dark:bg-[#1F2128] bg-[#F5F5F5]" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        {location.pathname !== "/" && location.pathname !== "/signup" && location.pathname !== "/forgot-password" && <Sidebar />}

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/sell-cars" element={<SellCars />} />
          <Route path="/buy-car" element={<BuyCars />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/services" element={<Service />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/" element={<LogOut />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/forgot-password" element={<ChangePassword />} />
          <Route path="/change-password" element={<ForgotPassword />} />
          
        </Routes>
      </div>
    </>
  )
}

export default App
