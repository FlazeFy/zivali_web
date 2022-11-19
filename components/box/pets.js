import React from 'react'
import { useState, useEffect } from "react"

//Font awesome icon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMars, faVirus, faBowlFood, faBath, faHandSparkles, faBell, faHeart, faArrowRight, faArrowLeft, faTriangleExclamation, faVenus} from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import EditPets from '../layouts/edit-pets'

const PetsBox = ({props, crslLength}) => {
    const [items, setItems] = useState([]);

    //Converter
    const data = Object.values(props);

    //Need to be fixed
    function nl2br (str, is_xhtml) {
        if (typeof str === 'undefined' || str === null) {
            return '';
        }
        var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? ' <br />' : ' <br> ';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
    }

    //Date convert
    function dateConverter(datetime){
        const result = new Date(datetime);
        const now = new Date(Date.now());
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        //FIx this!!!
        if(result.toDateString() === now.toDateString()){
            // if(result.getHours == now.getHours){
            //     return " " + result.getHours() + ":" + result.getMinutes();    
            // } else {
            //     return "Today " + result.getHours() + ":" + result.getMinutes();    
            // }
            return "Today at " + ("0" + result.getHours()).slice(-2) + ":" + ("0" + result.getMinutes()).slice(-2);
        } else if(result.toDateString() === yesterday.toDateString()){
            return "Yesterday at" + " " + ("0" + result.getHours()).slice(-2) + ":" + ("0" + result.getMinutes()).slice(-2);
        } else {
            return " " + ("0" + result.getDate()).slice(-2) + "/" + (result.getMonth() + 1) + "/" + result.getFullYear() + " " + ("0" + result.getHours()).slice(-2) + ":" + ("0" + result.getMinutes()).slice(-2);  
        }
    }

    //Count age in month and year
    function ageConvert(datetime){
        const result = new Date(datetime);
        const now = new Date(Date.now());
        var month = -1 * Math.floor((result - now) / (1000*60*60*24*30));

        if(month <= 12){
            return month - 1 + " mo";
        } else {
            var year = Math.floor(month / 12);
            return year + " yr " + (month - 1) % 12 + " mo";
        }
    }

    //Pets box bg color
    function getColorSet(i){
        if(i % 3 == 0){
            return '#878bd5';
        } else if(i % 3 == 1){
            return '#75db70';
        } else if(i % 3 == 2){
            return '#d46c83';
        }
    }

    //Pets status
    function getPetsStatus(status){
        if(status == "sick"){
            return (
                <button className='btn-danger' title='This pets is sick'><FontAwesomeIcon icon={faVirus} width="14px"/> </button>
            );
        } else if(status == "pregnant"){
            return (
                <button className='btn-danger' title='This pets is pregnant'><FontAwesomeIcon icon={faTriangleExclamation} width="14px"/> </button>
            );
        }
    }

    //Pets status
    function getPetsGender(gender){
        if(gender == "male"){
            return (
                <button className='btn-tag male' title='Gender : Male'><FontAwesomeIcon icon={faMars} width="14px"/> </button>
            );
        } else if(gender == "female"){
            return (
                <button className='btn-tag female' title='Gender : Female'><FontAwesomeIcon icon={faVenus} width="14px"/> </button>
            );
        }
    }
  
    return (
        <>
            {
                data.map((val, i, index) => {
                    const modalTarget = "#editModal" + val.id;

                    if(i < 3 * crslLength){
                        if((crslLength > 1) && (i >= 3 * (crslLength -1)) && (i <= 3 * crslLength)){
                            return (
                                <div className='col-4 pe-0' key={val.id}>
                                    <button className='pets_box m-0' style={{'backgroundImage': "url('../../"+val.pets_url_image+"')", 'backgroundColor': getColorSet(i) }} title="See Detail"
                                        data-bs-toggle="modal" data-bs-target={modalTarget}>
                                        {/* Modal */}
                                        <EditPets props={val}/>

                                        <div className='pets_box_body'>
                                            <h3 className='mb-2'>{val.pets_name}</h3>
                                            <div className='pets_tag-holder'>
                                                {/* Pets favorite */}
                                                <button className='btn-danger' title='My Favorite'><FontAwesomeIcon icon={faHeart} width="14.5px"/></button>
                                                {/* Pets age */}
                                                <button className='btn-tag' title='Age'><FontAwesomeIcon icon={faCalendar} width="13px"/> {ageConvert(val.pets_born)}</button>
                                                {/* Pets gender */}
                                                {getPetsGender(val.pets_gender)}
                                                {/* Pets sickness status */}
                                                {getPetsStatus(val.pets_status)}
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
                                            <p>{nl2br(val.pets_desc)}</p>
                                            <p className='date-text'>Last updated : {dateConverter(val.updated_at)}</p>
                                        </div>
                                    </button>
                                </div>
                            )
                        } else if(crslLength == 1){
                            return (
                                <div className='col-4 pe-0' key={val.id}>
                                    <button className='pets_box m-0' style={{'backgroundImage': "url('../../"+val.pets_url_image+"')", 'backgroundColor': getColorSet(i) }} title="See Detail"
                                        data-bs-toggle="modal" data-bs-target={modalTarget}>
                                        {/* Modal */}
                                        <EditPets props={val}/>
                                        <div className='pets_box_body'>
                                            <h3 className='mb-2'>{val.pets_name}</h3>
                                            <div className='pets_tag-holder'>
                                                {/* Pets favorite */}
                                                <button className='btn-danger' title='My Favorite'><FontAwesomeIcon icon={faHeart} width="14.5px"/></button>
                                                {/* Pets age */}
                                                <button className='btn-tag' title='Age'><FontAwesomeIcon icon={faCalendar} width="13px"/> {ageConvert(val.pets_born)}</button>
                                                {/* Pets gender */}
                                                {getPetsGender(val.pets_gender)}
                                                {/* Pets sickness status */}
                                                {getPetsStatus(val.pets_status)}
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
                                            <p>{nl2br(val.pets_desc)}</p>
                                            <p className='date-text'>Last updated : {dateConverter(val.updated_at)}</p>
                                        </div>
                                    </button>
                                </div>
                            )
                        }
                    } else {
                        return null;
                    }
                
                }
            )
        }
        </>
    )
  }
  
  export default PetsBox;
  