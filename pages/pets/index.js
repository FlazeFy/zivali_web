import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

//Font awesome icon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faLeaf, faComment, faBell, faBoxArchive } from "@fortawesome/free-solid-svg-icons"

function Pets() {
  //Initial variable
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [nav, setToogleNav] = useState(false);

  useEffect(() => {
    fetch()
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);      
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  },[])


  return (
    <div>
      <h2>Pets</h2>
    </div>
  )
}

export default Pets;
