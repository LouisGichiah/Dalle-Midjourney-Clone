import React from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import { Openailogo } from './assets';
import { BuildPost, Home } from './Pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={Openailogo} alt="Openailogo"className='w-28 object-contain'/>
          </Link>

          <Link to="/build-post"
          className='font-roboto font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'
          >Build</Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/build-post' element={<BuildPost/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App