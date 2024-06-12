import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TrendSidebar from './components/TrendSidebar'
import MainPage from './components/MainPage'
import Expolore from './components/Explore'

const App = () => {
  return (
    <div className='container'>
     <Header />
     <div className='main-content'>
        <Sidebar />
        <MainPage />
        <TrendSidebar />
     </div>
    </div>
  )
}

export default App;