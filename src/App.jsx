import './App.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import About from './components/Pages/About';
import ContactUs from './components/Pages/ContactUs';
import Home from './components/Pages/Home';
import JobApplication from './components/Pages/JobApplication';
import Privacy from './components/Pages/Privacy';
import Projects from './components/Pages/Projects';
import RequestServices from './components/Pages/RequestServices';
import Success from './components/Pages/Success';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/*' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/apply' element={<JobApplication/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/request-services' element={<RequestServices/>}/>
          <Route path='/success' element={<Success/>} />
        </Routes>
      </Layout>
    </>
  )
}

export default App