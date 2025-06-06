import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HotelPage from './pages/HotelPage.jsx'
import FlightBookingPage from './pages/FlightBookingPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import TourPackagePage from './pages/TourPackagePage.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/hotel-resort" element={<HotelPage/>} />
        <Route path="/flight-booking" element={<FlightBookingPage/>} />
        <Route path="/tour-package" element={<TourPackagePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
