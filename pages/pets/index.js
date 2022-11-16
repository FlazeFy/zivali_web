import React from 'react'
import { useState, useEffect } from "react"

import Sidebar from '../../components/layouts/sidebar'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Master.module.css'
import petStyle from './pets.module.css'

//Font awesome icon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMars, faVirus, faBowlFood, faBath, faHandSparkles, faBell, faHeart} from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"

function PetsIndex() {
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
                    <h3>Dashboard</h3>
                    <div className={petStyle.pets_control_section}>
                        <button className={petStyle.add_pets}><FontAwesomeIcon icon={faPlus} width="13px"/> Add Pets</button>
                        <div className='col-11 pets_list_section'>
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className='row'>
                                            <div className='col-3'>
                                                <div className='pets_box m-1' style={{'background-image': "url('../../z_1-removebg-preview.png')" }} title="See Detail">
                                                    <div className='pets_box_body'>
                                                        <h3>Ashley</h3>
                                                        <div className='pets_tag-holder'>
                                                            {/* Pets favorite */}
                                                            <button className='btn-danger'><FontAwesomeIcon icon={faHeart} width="14.5px"/></button>
                                                            {/* Pets age */}
                                                            <button className='btn-tag' title='Age'><FontAwesomeIcon icon={faCalendar} width="13px"/> 2 mo </button>
                                                            {/* Pets gender */}
                                                            <button className='btn-tag male' title='Gender : Male'><FontAwesomeIcon icon={faMars} width="14px"/> </button>
                                                            {/* Pets sickness status */}
                                                            <button className='btn-danger' title='This pets is sick'><FontAwesomeIcon icon={faVirus} width="14px"/> </button>
                                                            {/* Pets feed schedule */}
                                                            <button className='btn-tag' title='0.5 sachet of worm/day'><FontAwesomeIcon icon={faBowlFood} width="14px"/> Daily</button>
                                                            {/* Pets cleaning schedule */}
                                                            <button className='btn-tag' title='1/week'><FontAwesomeIcon icon={faBath} width="14px"/> Weekly</button>
                                                            {/* Pets total */}
                                                            <button className='btn-tag' title='2 similiar pets'>x 2</button>
                                                            {/* Pets's cage cleaning schedule */}
                                                            <button className='btn-tag' title='1/week'><FontAwesomeIcon icon={faHandSparkles} width="14px"/> Weekly</button>
                                                            {/* Pets feeding notification */}
                                                            <button className='btn-danger'><FontAwesomeIcon icon={faBell} width="11px"/> Time to feed!</button>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                                        <p className='date-text'>Last updated : 16/Nov/22 10:20</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className='pets_box m-1' style={{'background-image': "url('../../z_1-removebg-preview.png')" }} title="See Detail">
                                                    <div className='pets_box_body'>
                                                        <h3>Ashley</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                                        <p className='date-text'>Last updated : 16/Nov/22 10:20</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className='pets_box' style={{'background-image': "url('../../z_1-removebg-preview.png')" }} title="See Detail">
                                                    <div className='pets_box_body'>
                                                        <h3>Ashley</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                                        <p className='date-text'>Last updated : 16/Nov/22 10:20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>   
                                    </div>
                                    <div className="carousel-item bg-dark">
                                        <img src="../../z_1-removebg-preview.png" className="d-block w-100" alt="..."></img>
                                    </div>
                                    <div className="carousel-item bg-dark">
                                        <img src="../../z_3-removebg-preview.png" className="d-block w-100" alt="..."></img>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
  }
  
  export default PetsIndex;
  