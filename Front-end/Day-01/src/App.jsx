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

// import Home from './components/Home';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<Home/>} />
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
