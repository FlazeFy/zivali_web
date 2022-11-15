import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Nav from './nav'
import Pets from './pets/index'

export default function Master() {
   //Initial variable
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch()
      .then(res => res.json())
      .then(
        (result) => {
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>
          );  
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  },[])

  if (typeof window === 'object') {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/pets" element={<Pets />}/>
            <Route path="/setup"  />
            <Route path="/eco" />
            <Route path="/notification"  />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

// export default Master;
