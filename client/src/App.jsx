import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TrendSidebar from './components/TrendSidebar'
import MainPage from './components/MainPage'

const App = () => {
  return (
    <div className='container'>
     <Header /> 
     <Sidebar />
     <MainPage />
     <TrendSidebar />
    </div>
  )
}

export default App