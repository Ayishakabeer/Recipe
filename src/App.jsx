import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home' 
import Footer from './Components/Footer'
import View from './Pages/View'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/view'  element={<View/>} />
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
