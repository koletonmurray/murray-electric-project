import './App.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import About from './components/Pages/About';
import ContactUs from './components/Pages/ContactUs';
import Home from './components/Pages/Home';
import JobApplication from './components/Pages/JobApplication';
import LoginForm from './components/Pages/LoginForm';
import Privacy from './components/Pages/Privacy';
import PastProjects from './components/Pages/PastProjects';
import RequestServices from './components/Pages/RequestServices';
import ScrollToTop from './components/ScrollToTop';
import Success from './components/Pages/Success';

import PrivateRoute from './components/PrivateRoute';
import Admin from './components/Pages/Admin';
import AdminLayout from './components/Layout/AdminLayout';
import Logout from './components/Pages/Logout';
import ManageAccess from './components/Pages/ManageAccess';
import ReviewApplications from './components/Pages/ReviewApplications';
import ReviewRequests from './components/Pages/ReviewRequests';


function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/admin/*' element={
          <PrivateRoute>
            <AdminLayout>
              <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="/*" element={<Admin />} />
                <Route path="/job-applications" element={<ReviewApplications />} />
                <Route path="/manage-access" element={<ManageAccess />} />
                <Route path="/service-requests" element={<ReviewRequests />} />
              </Routes>
            </AdminLayout>
          </PrivateRoute>
        }/>
        <Route path='/*' element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path='/*' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/admin' element={<Admin/>}/>
              <Route path='/apply' element={<JobApplication/>}/>
              <Route path='/contact-us' element={<ContactUs/>}/>
              <Route path='/login' element={<LoginForm />} />
              <Route path='/logout' element={<Logout/>}/>
              <Route path='/privacy' element={<Privacy/>}/>
              <Route path='/projects' element={<PastProjects/>}/>
              <Route path='/request-services' element={<RequestServices/>}/>
              <Route path='/success' element={<Success/>} />
            </Routes>
          </Layout>
        }/>
      </Routes>
    </>
  )
}

export default App