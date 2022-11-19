import React from 'react'
import { useState, useEffect } from "react"
import Link from 'next/link'
import Axios from "axios"

//Font awesome icon
import { library, text } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faInfo, faMars, faSave, faUpload, faVenus } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

const EditPets = ({props}) => {
    //Initial variable
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [nav, setToogleNav] = useState(false);
    var [petsGender, setGender] = useState("");
    const [favorite, setFavorite] = useState(false);
    const [petsName, setPetsName] = useState("");
    const [petsType, setPetsType] = useState("");
    const [petsStatus, setPetsStatus] = useState("");
    var [petsBorn, setPetsBorn] = useState("");
    const [petsDesc, setPetsDesc] = useState("");
    var [petsUrlImage, setPetsUrlImage] = useState("");
    const [items, setItems] = useState([]);

    //Error message
    const [err_dateBorn, setErrorMsg_dateBorn] = useState("");
    const [err_petsName, setErrorMsg_petsName] = useState("");
  
    useEffect(() => {
      fetch("http://localhost:9000/getAllPetsType")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);   
          setItems(result.data);   
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    },[])

    const modalId = "editModal" + props.id;

    //Edit pets
    async function editPets (e, id, val) {
      // e.preventDefault();

      if(petsName.length != 0){
        const pets_name = petsName
      } else {
        const pets_name = props.pets_name
      }

      //Cant select pets type
      if(petsType.length != 0){
        const pets_type = petsType
      } else {
        const pets_type = props.pets_type
      }

      //Cant insert desc
      if(petsDesc.length != 0){
        const pets_desc = petsDesc
      } else {
        const pets_desc = props.pets_desc
      }

      if(petsStatus.length != 0){
        const pets_status = petsStatus
      } else {
        const pets_status = props.pets_status
      }
      
      if(petsBorn.length != 0){
        const pets_born = petsBorn
      } else {
        const pets_born = props.pets_born
      }

      try {
        await Axios.put("http://localhost:9000/editPets/"+id, {
          pets_name,
          pets_type,
          pets_desc,
          pets_status,
          pets_born
        });
      } catch (error) {
        console.log(error.response);
      }
    };

    const editGender = async (e) => {
      var pets_gender = petsGender[0]
      var id = petsGender[1]

      try {
        await Axios.put("http://localhost:9000/editGender/"+id, {
          pets_gender
        });
      } catch (error) {
        console.log(error.response);
      }
    };

    //Converter
    const data = Object.values(items);

    function getButtonGender(id, gender){
      if(gender == "male"){
        return (
          <form onSubmit={editGender} className="d-inline m-0 p-0">
            <button className='btn-form-header-toogle male' title='Set gender Male' onClick={(e) => setGender(["female", id])} type="submit"><FontAwesomeIcon icon={faMars} width="20px"/></button>
          </form>
        );
      } else {
        return (
          <form onSubmit={editGender} className="d-inline m-0 p-0">
            <button className='btn-form-header-toogle female' title='Set gender Female' onClick={(e) => setGender(["male", id])} type="submit"><FontAwesomeIcon icon={faVenus} width="20px"/></button>
          </form>
        );
      }
    }

    function getButtonFavorite(){
      if(favorite == false){
        return (
          <button className='btn-form-header-toogle favorite' title='Add to favorite pets' onClick={(e) => setFavorite(true)}><FontAwesomeIcon icon={faHeart} width="20px"/></button>
        );
      } else {
        return (
          <button className='btn-form-header-toogle normal' title='Remove from favorite pets' onClick={(e) => setFavorite(false)}><FontAwesomeIcon icon={faHeart} width="20px"/></button>
        );
      }
    }

    //Validator
    function validateDateBorn(datetime){
      var today = new Date();
      var check = new Date(datetime);

      if(check >= today){
        setErrorMsg_dateBorn("Date invalid. Can't set date in the future");
      } else {
        setErrorMsg_dateBorn("");
        setPetsBorn(datetime);
      }
    }

    function validatePetsName(name){
      if(name.length > 75){
        setErrorMsg_petsName("Input invalid. Reach maximum available character");
      } else {
        setErrorMsg_petsName("");
        setPetsName(name);
      }
    }

    function getSlctdStatus(status){
        // <option selected defaultValue="healthy">Healthy</option>
        // <option defaultValue="sick">Sick</option>
        // <option defaultValue="pregnant">Pregnant</option>
        var arr_status = ["healthy", "sick", "pregnant"];
        
        return (
          <select className="form-select mt-1" onChange={(e)=> setPetsStatus(e.target.value)}>
            {
              arr_status.map((e, i, index) => {
                  if(e == status){
                      return (
                          <option selected defaultValue={e}>{e}</option>
                      );
                  } else {
                      return (
                          <option defaultValue={e}>{e}</option>
                      );
                  }
              })
            }
          </select>
        );
    
    }

    function getSubmitButton(){
        if((props.pets_name.length != 0)&&(typeof document !== "undefined")&&(err_dateBorn == "")&&(err_petsName == "")){
          return (
            <button className='btn-form-header-toogle save float-end' title='Save new pets' style={{'marginRight': "15px" }} onClick={(e)=> editPets(e,props.id,props)}
              ><FontAwesomeIcon icon={faSave} width="20px"/></button>
          );
        } 
    }

    var loadFile = function(event) {
      if (typeof document !== "undefined") {
        var image = document.getElementById('showUploadImage');
        image.style.backgroundImage = "url('"+URL.createObjectURL(event.target.files[0])+"')";
      }
    };
  
    return (
        <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Pets</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className='modal-select-image-show' id='showUploadImage' style={{'background-image': "url('../../"+props.pets_url_image+"')" }}>
                            <input type="file"  accept="image/*" name="image" id="file"  onChange={(e)=> loadFile(e)} className='d-none'></input>
                        </div>
                        <div className='modal-form-body'>
                            <div className='row modal-body-header-set'>
                                <label htmlFor="file" className="btn-form-header-toogle upload p-3" title='Upload Image'> <FontAwesomeIcon icon={faImage} width="20px"/> </label>
                                {getButtonFavorite()}
                                {getButtonGender(props.id, props.pets_gender)}
                                {getSubmitButton()}
                                <button className='btn-form-header-toogle save float-end' title='See detail'><FontAwesomeIcon icon={faInfo} width="10px"/></button>
                            </div>
                            <form className='p-3'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                <label className='mt-4 text-dark'>Pets Name <b className='label-warning'>{err_petsName}</b></label>
                                <input className='form-control mt-1' type={'text'} onChange={(e)=> validatePetsName(e.target.value)} onBlur={(e)=> getSubmitButton()} defaultValue={props.pets_name}></input>
                                <label className='mt-2 text-dark'>Type</label>
                                <select className="form-select mt-1" onChange={(e)=> setPetsType(e.target.value)}>
                                    {
                                        data.map((val, i, index) => {
                                            if(props.pets_type == val.pets_type){
                                                return (<option selected defaultValue={val.pets_type} key={val.id}>{val.pets_type}</option>);
                                            } else {
                                                return (<option defaultValue={val.pets_type} key={val.id}>{val.pets_type}</option>);
                                            }
                                        })
                                    }
                                </select>
                                <label className='mt-2 text-dark'>Status</label>
                                {getSlctdStatus(props.pets_status)}
                                <label className='mt-2 text-dark'>Date Birth <b className='label-warning'>{err_dateBorn}</b></label>
                                <input className='form-control mt-1' type={'date'} onChange={(e)=> validateDateBorn(e.target.value)} defaultValue={props.pets_born}></input>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                <label className='mt-4 text-dark'>Description <b className='label-info'>(Optional)</b></label>
                                <textarea className='form-control mt-1' type={'text'} rows="4" defaultValue={props.pets_desc} onChange={(e)=> setPetsDesc(e.target.value)}></textarea>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
export default EditPets;
  