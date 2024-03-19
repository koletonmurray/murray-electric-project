import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home'


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/*' element={<Home/>}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App