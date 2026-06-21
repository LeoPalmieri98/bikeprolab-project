import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RevisionForm from './pages/RevisionForm'
import ShopPage from './pages/ShopPage'
import DetailPage from './pages/DetailPage'
import DefaultLayout from './layouts/DefaultLayout'
import NotFound from './pages/NotFound'
import AboutPage from './pages/AboutPage'



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout} >
            <Route path='/' Component={HomePage}></Route>
            <Route path='/shop' Component={ShopPage}></Route>
            <Route path='/shop/:id' Component={DetailPage}></Route>
            <Route path='/revision' Component={RevisionForm}></Route>
            <Route path='*' Component={NotFound}></Route>
            <Route path='/about' Component={AboutPage}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
