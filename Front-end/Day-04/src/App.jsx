import { React } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import University from './components/University';
import Course from './components/Course';
import CourseEnrollForm from './components/CourseEnrollForm';
import './App.css'
import Log from './components/Log';
import Dashboard from './components/Admin/Dashboard';
// import Home from './components/Home';
import Sidebar from './components/Admin/Sidebar';
import Addcourse from './components/Admin/Addcourse';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/" element={<Home/>} /> */}
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<Addcourse/>} />
        <Route path="/side" element={<Sidebar/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/login" element={<Log/>} />
        <Route path="/courseenrollform" element={<CourseEnrollForm/>} />
        <Route path="/course" element={<Course/>} />
        <Route path="/nav" element={<Navbar/>} />
        <Route path="/uni" element={<University/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      
    </Routes>
    </>
  )
}

export default App;
