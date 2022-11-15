import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Master.module.css'

//Font awesome icon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faLeaf, faComment, faBell, faBoxArchive } from "@fortawesome/free-solid-svg-icons"

function Master() {
  //Initial variable
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [nav, setToogleNav] = useState(false);

  useEffect(() => {
    fetch()
      .then(res => res.json())
      .then(
        (result) => {
          // library.add(faPaw);
          setIsLoaded(true);      
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  },[])

  // function openNav() {
  //   if (typeof document !== "undefined") {
  //     document.getElementById("mySidebar").style.width = "250px";
  //     document.getElementById("main").style.marginLeft = "250px";
  //     //For now.
  //     document.getElementById("textNav1").style.cssText = "font-size: 22px; border-radius: 10px;";
  //     document.getElementById("textNav2").style.cssText = "font-size: 22px; border-radius: 10px;";
  //     document.getElementById("textNav3").style.cssText = "font-size: 22px; border-radius: 10px;";
  //     document.getElementById("textNav4").style.cssText = "font-size: 22px; border-radius: 10px;";
  //     document.getElementById("textNav5").style.cssText = "font-size: 22px; border-radius: 10px;";
  //   }
  // }
  
  // function closeNav() {
  //   if (typeof document !== "undefined") {
  //     document.getElementById("mySidebar").style.width = "10vh";
  //     document.getElementById("main").style.marginLeft= "10vh";
  //     //For now.
  //     document.getElementById("textNav1").style.cssText = "font-size: 0px; border-radius: 100%;";
  //     document.getElementById("textNav2").style.cssText = "font-size: 0px; border-radius: 100%;";
  //     document.getElementById("textNav3").style.cssText = "font-size: 0px; border-radius: 100%;";
  //     document.getElementById("textNav4").style.cssText = "font-size: 0px; border-radius: 100%;";
  //     document.getElementById("textNav5").style.cssText = "font-size: 0px; border-radius: 100%;";
  //   }
  // }

  function toogleNav(){
    if (typeof document !== "undefined") {
      if(nav == false){
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        //For now.
        document.getElementById("textNav1").style.cssText = "font-size: 22px; border-radius: 10px;";
        document.getElementById("textNav2").style.cssText = "font-size: 22px; border-radius: 10px;";
        document.getElementById("textNav3").style.cssText = "font-size: 22px; border-radius: 10px;";
        document.getElementById("textNav4").style.cssText = "font-size: 22px; border-radius: 10px;";
        document.getElementById("textNav5").style.cssText = "font-size: 22px; border-radius: 10px;";
      } else {
        document.getElementById("mySidebar").style.width = "10vh";
        document.getElementById("main").style.marginLeft= "10vh";
        //For now.
        document.getElementById("textNav1").style.cssText = "font-size: 0px; border-radius: 100%;";
        document.getElementById("textNav2").style.cssText = "font-size: 0px; border-radius: 100%;";
        document.getElementById("textNav3").style.cssText = "font-size: 0px; border-radius: 100%;";
        document.getElementById("textNav4").style.cssText = "font-size: 0px; border-radius: 100%;";
        document.getElementById("textNav5").style.cssText = "font-size: 0px; border-radius: 100%;";
      }
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Zivali</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id="Navigation">
          <ul>
            <li><a href="smartDoc">Dashboard</a></li>
            <li><a href="history">Calendar</a></li>
            <li><a href="dataKu">My Pets</a></li>
          </ul>
        </div>

        <div id="mySidebar" className="sidebar">
          {/* <a href="javascript:void(0)" className="closebtn" onClick={toogleNav}>×</a> */}
          <a href="#" id='textNav1' className='active' title='Pets'>
            <span className='icon-nav'><FontAwesomeIcon icon={faPaw} width="24px"/></span> Pets
          </a> {/* Dashboard, Calendar, My Pets*/}
          <a href="#" id='textNav2'>
            <span className='icon-nav' title='Setup'><FontAwesomeIcon icon={faBoxArchive} width="24px"/></span> Setup
          </a> {/* Tools, Food & Care */}
          <a href="#" id='textNav3'>
            <span className='icon-nav' title='Eco'><FontAwesomeIcon icon={faLeaf} width="24px"/></span> Eco
          </a> {/*Trivia, My Eco*/}
          <a href="#" id='textNav4'>
            <span className='icon-nav' title='Forum'><FontAwesomeIcon icon={faComment} width="24px"/></span> Forum
          </a> {/*All, Liked Post*/}
          <a href="#" id='textNav5'>
            <span className='icon-nav' title='Notification'><FontAwesomeIcon icon={faBell} width="24px"/></span> Notification
            </a> {/*History, Announcement*/}

            {/*Profile, About Us, Help Center*/}
        </div>
        <button className="openbtn" onClick={toogleNav}>☰</button>  

        <div className="content_layout" id="main">
          <h2>Dashboard</h2>
        </div>
      </main>
    </div>
  )
}

export default Master;
