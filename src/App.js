import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllItems from './pages/AllItems'
import Header from './components/Header'
import Footer from './components/Footer'
import SingleItem from './pages/SingleItem'
import AddItem from './pages/AddItem'
import About from './pages/About'
import Kids from './pages/Kids'
import Admin from './pages/Admin'
import AdminSingleItem from './pages/AdminSingleItem'
import ForMen from './pages/ForMen'
import ForWomen from './pages/ForWomen'
import Pets from './pages/Pets'
import Electronics from './pages/Electronics'
import Furniture from './pages/Furniture'
import Contacts from './pages/Contacts'
import './assets/styles.css'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='about' element={<About/>}/>
        <Route path='/' element={<AllItems />} />
        <Route path='/single-item' element={<SingleItem/>}/>
        <Route path='/add-item' element={<AddItem/>} />
        <Route path='/men' element={<ForMen/>} />
        <Route path='/women' element={<ForWomen/>} />
        <Route path='/kids-item' element={<Kids/>}/>
        <Route path='/pets' element={<Pets/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='admin-single-item' element={<AdminSingleItem/>}/>
        <Route path='*' element={<h2>Page not Found</h2>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
