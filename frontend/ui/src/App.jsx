import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EmployeeList from './components/EmployeeList'
import InsertEmployee from './components/InsertEmployee'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ShowEmployeeDetails from './components/ShowEmployeeDetails'
import UpdateEmployee from './components/UpdateEmployee'
function App() {

  return (
    <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<EmployeeList/>} />
            <Route path="/insert" element={<InsertEmployee/>} />
            <Route path="/showdetails/:id" element={<ShowEmployeeDetails/>} />
            <Route path="/updatedetails/:id" element={<UpdateEmployee/>} />
            
          </Routes>
          <Footer/>
        </Router>
    </div>
  )
}

export default App
