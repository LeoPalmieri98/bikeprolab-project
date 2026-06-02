import { useState } from 'react'
import HomePage from './pages/HomePage'
import RevisionForm from './pages/RevisionForm'
import ShopPage from './pages/ShopPage'
import DetailPage from './pages/DetailPage'
import DefaultLayout from './layouts/DefaultLayout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/shop' element={<ShopPage />}></Route>
            <Route path='/shop/:id' element={<DetailPage />}></Route>
            <Route path='/revision' element={<RevisionForm />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
