import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Addproduct from './pages/Addproduct'
import Allproducts from './pages/Allproducts'
import MyLoader from './components/MyLoader'
import LoadingPage from './pages/LoadingPage'
import Error from './pages/Error'
import PageNotfound from './pages/PageNotfound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Allproducts />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/loader" element={<LoadingPage />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<PageNotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
