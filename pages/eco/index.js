import React from 'react'
import { useState, useEffect } from "react"

import Sidebar from '../../components/layouts/sidebar'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Master.module.css'

//Font awesome icon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from "@fortawesome/free-solid-svg-icons"

function EcoIndex() {
    //Initial variable
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
  
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
        <div className={styles.container}>
            <Head>
                <title>Zivali</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Sidebar />
                <div className="content_layout" id="main">
                    <h5>My Ecosystem</h5>
                </div>
            </main>
        </div>
    )
  }
  
  export default EcoIndex;
  