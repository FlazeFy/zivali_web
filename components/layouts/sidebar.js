import React from 'react'
import { useState, useEffect } from "react"
import Link from 'next/link'

//Font awesome icon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faLeaf, faComment, faBell, faBoxArchive } from "@fortawesome/free-solid-svg-icons"

function Sidebar() {
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
            document.getElementById("textNav1").style.cssText = "font-size: 20px; border-radius: 10px;";
            document.getElementById("textNav2").style.cssText = "font-size: 20px; border-radius: 10px;";
            document.getElementById("textNav3").style.cssText = "font-size: 20px; border-radius: 10px;";
            document.getElementById("textNav4").style.cssText = "font-size: 20px; border-radius: 10px;";
            document.getElementById("textNav5").style.cssText = "font-size: 20px; border-radius: 10px;";
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
        <div>
            <div id="Navigation">
                <ul>
                    <li><a href="smartDoc">Dashboard</a></li>
                    <li><a href="history">Calendar</a></li>
                    <li><a href="dataKu">My Pets</a></li>
                </ul>
            </div>
  
            <div id="mySidebar" className="sidebar">
                {/* <a href="javascript:void(0)" className="closebtn" onClick={toogleNav}>×</a> */}
                <Link href="/pets">
                    <li id='textNav1' className='active' title='Pets'>
                        <span className='icon-nav'><FontAwesomeIcon icon={faPaw} width="24px"/></span> Pets
                    </li> {/* Dashboard, Calendar, My Pets*/}
                </Link>
    
                <Link href="/setup">
                    <li id='textNav2' title='Setup'>
                        <span className='icon-nav'><FontAwesomeIcon icon={faBoxArchive} width="24px"/></span> Setup
                    </li> {/* Tools, Food & Care */}
                </Link>
    
                <Link href="/eco">
                    <li id='textNav3' title='Eco'>
                        <span className='icon-nav'><FontAwesomeIcon icon={faLeaf} width="24px"/></span> Eco
                    </li> {/*Trivia, My Eco*/}
                </Link>
    
                <Link href="/forum">
                    <li id='textNav4' title='Forum'>
                        <span className='icon-nav'><FontAwesomeIcon icon={faComment} width="24px"/></span> Forum
                    </li> {/*All, Liked Post*/}
                </Link>
    
                <Link href="/notification">
                    <li id='textNav5' title='Notification'>
                        <span className='icon-nav'><FontAwesomeIcon icon={faBell} width="24px"/></span> Notification
                    </li> {/*History, Announcement*/}
                </Link>
    
                {/*Profile, About Us, Help Center*/}
            </div>
            <button className="openbtn" onClick={toogleNav}>☰</button>  
        </div>
    )
  }
  
export default Sidebar;
  