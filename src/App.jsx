import { useState } from 'react'
import HomePage from './pages/HomePage'
import RevisionForm from './pages/RevisionForm'
import ShopPage from './pages/ShopPage'
import DetailPage from './pages/DetailPage'
import DefaultLayout from './layouts/DefaultLayout'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


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
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
