import React from 'react'
import { useState, useEffect } from "react"
import Link from 'next/link'

//Font awesome icon
import { library, text } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faMars, faSave, faUpload, faVenus } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

function AddPets() {
    //Initial variable
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [nav, setToogleNav] = useState(false);
    const [gender, setGender] = useState("male");
    const [items, setItems] = useState([]);
  
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

    //Converter
    const data = Object.values(items);

    function getButtonGender(){
      if(gender == "male"){
        return (
          <button className='btn-form-header-toogle male' title='Set gender Male' onClick={(e) => setGender("female")}><FontAwesomeIcon icon={faMars} width="20px"/></button>
        );
      } else {
        return (
          <button className='btn-form-header-toogle female' title='Set gender Female' onClick={(e) => setGender("male")}><FontAwesomeIcon icon={faVenus} width="20px"/></button>
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
      <div className="modal fade" id="addPetsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <h5 className="modal-title" id="exampleModalLabel">Add New Pets</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className='modal-select-image-show' id='showUploadImage'>
                <input type="file"  accept="image/*" name="image" id="file"  onChange={(e)=> loadFile(e)} className='d-none'></input>
              </div>
              <div className='modal-form-body'>
                <div className='row modal-body-header-set'>
                  <label htmlFor="file" className="btn-form-header-toogle upload p-3" title='Upload Image'> <FontAwesomeIcon icon={faImage} width="20px"/> </label>
                  <button className='btn-form-header-toogle favorite' title='Add to favorite pets'><FontAwesomeIcon icon={faHeart} width="20px"/></button>
                  {getButtonGender()}
                  <button className='btn-form-header-toogle save float-end' title='Save new pets' style={{'marginRight': "15px" }}><FontAwesomeIcon icon={faSave} width="20px"/></button>
                </div>
                <form className='p-3'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <label className='mt-4'>Pets Name</label>
                      <input className='form-control mt-1' type={'text'}></input>
                      <label className='mt-2'>Type</label>
                      <select className="form-select mt-1">
                        {
                          data.map((val, i, index) => {
                            if(i == 0){
                              return (<option selected defaultValue={val.pets_type} key={val.id}>{val.pets_type}</option>);
                            } else {
                              return (<option defaultValue={val.pets_type} key={val.id}>{val.pets_type}</option>);
                            }
                          })
                        }
                      </select>
                      <label className='mt-2'>Status</label>
                      <select className="form-select mt-1">
                        <option selected defaultValue="healthy">Healthy</option>
                        <option defaultValue="sick">Sick</option>
                        <option defaultValue="pregnant">Pregnant</option>
                      </select>
                      <label className='mt-2'>Date Birth</label>
                      <input className='form-control mt-1' type={'date'}></input>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <label className='mt-4'>Description <b className='label-info'>(Optional)</b></label>
                      <textarea className='form-control mt-1' type={'text'} rows="4"></textarea>
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
  
export default AddPets;
  