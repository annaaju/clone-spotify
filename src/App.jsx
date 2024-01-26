import './App.css'

//COMPONENTS
import  { useState } from 'react'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Footer from './components/Footer/Footer'
import MainContent from './components/MainContent/MainContent'

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [showFooter, setShowFooter] = useState(true);

  const handleHideFooter = () => {
    setShowFooter(false);
  }

  return (
    
    <>
      <SideBar></SideBar>
      
      <div className='main-container'>
        
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        ></Header>

        <MainContent searchTerm={searchTerm}
        ></MainContent>

      </div>
    
      {showFooter && <Footer onHideFooter={handleHideFooter} />}

    
    </>
)}

export default App
