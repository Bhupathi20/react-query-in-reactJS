
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Contact } from './pages/Contact'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { useState, createContext } from 'react'
import { Navbar } from './Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const AppContext = createContext();

function App() {
  const client = new QueryClient({defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
    }
  }});

  return(
    <div className='App'>
      <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  )

} 


export default App
