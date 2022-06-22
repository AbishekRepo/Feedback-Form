import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

  return (

    <FeedbackProvider>
      <BrowserRouter>

        <Header/>

        <div className="container">
          
          <Routes>
            
              <Route path="/" element={
                <>
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeedbackList/>
                  
                </>
              }/>
              
              <Route path='/about' element={<About/>}/>
              
            </Routes>

        </div>
        <AboutIconLink/>

      </BrowserRouter>
    </FeedbackProvider>
  )
}

export default App