import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllItems from './pages/AllItems'
import Header from './components/Header'
import Footer from './components/Footer'
import SingleItem from './pages/SingleItem'
import AddItem from './pages/AddItem'
import Home from './pages/Home'
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
import Login from './pages/Login'
import SignUp from './pages/Signup'
import PrivateRoutes from './pages/PrivateRoutes'


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route element={<PrivateRoutes/>} >
        <Route path='/home' element={<Home/>}/>
        <Route path='/all' element={<AllItems />} />
        <Route path='/single-item' element={<SingleItem/>}/>
        <Route path='/add-item' element={<AddItem/>} />
        <Route path='/men' element={<ForMen/>} />
        <Route path='/women' element={<ForWomen/>} />
        <Route path='/kids-item' element={<Kids/>}/>
        <Route path='/pets' element={<Pets/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='admin-single-item' element={<AdminSingleItem/>}/>
        </Route>
      
        
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='*' element={<h2>Page not Found</h2>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
