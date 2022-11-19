const { response } = require('express')
const express = require('express')
const connection = require('../database.js')
const router = new express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to zivali')
})

//Get all pets
router.get('/getAllPets', (req, res) => {
    connection.query('SELECT * FROM pets ORDER by updated_at', (error, rows, fields) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).json({ msg: rows.length + " Data retrived", status: 200, data: rows })
        }
    })
})

//Get all pets type
router.get('/getAllPetsType', (req, res) => {
    connection.query('SELECT * FROM pets_type ORDER by updated_at', (error, rows, fields) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).json({ msg: rows.length + " Data retrived", status: 200, data: rows })
        }
    })
})

//Insert pets
router.post('/addPets/:id', (req, res) => {
    const id = req.params.id;
    const pets_name = req.body.pets_name
    const pets_type = req.body.pets_type
    const pets_gender = req.body.pets_gender
    const pets_desc = req.body.pets_desc
    const pets_status = req.body.pets_status
    const pets_born = req.body.pets_born
    const pets_url_image = req.body.pets_url_image
    const pets_url_video = req.body.pets_url_video
    const created_at = new Date()
    const updated_at = new Date()

    connection.query("INSERT INTO " +
        "pets (id, user_id, pets_name, pets_type, pets_gender, pets_desc, pets_status, pets_born, pets_url_image, pets_url_video, created_at, updated_at) " +
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
        [null, id, pets_name, pets_type, pets_gender, pets_desc, pets_status, pets_born, pets_url_image, pets_url_video, created_at, updated_at], (error, rows, fields) => {
        if (error) {
            res.status(400).json({ msg: "Error :" + error })
        } else {
            res.status(200).json({ msg: "Insert Pets Success",status:200, data: rows })
        }
    })
})

router.put('/editPets/:id', (req, res) => {
    const id = req.params.id;
    const pets_name = req.body.pets_name
    const pets_type = req.body.pets_type
    const pets_desc = req.body.pets_desc
    const pets_status = req.body.pets_status
    const pets_born = req.body.pets_born
    const updated_at = new Date()

    connection.query("UPDATE " +
        "pets SET pets_name = ?, pets_type = ?, pets_desc = ?, pets_status = ?, pets_born = ?, updated_at = ? " +
        "WHERE id = ? ",
        [pets_name, pets_type, pets_desc, pets_status, pets_born, updated_at, id], (error, rows, fields) => {
        if (error) {
            res.status(400).json({ msg: "Error :" + error })
        } else {
            res.status(200).json({ msg: "Edit Pets detail Success",status:200, data: rows })
        }
    })
})

router.put('/editGender/:id', (req, res) => {
    const id = req.params.id;
    const pets_gender = req.body.pets_gender
    const updated_at = new Date()

    connection.query("UPDATE " +
        "pets SET pets_gender = ?, updated_at = ? " +
        "WHERE id = ? ",
        [pets_gender, updated_at, id], (error, rows, fields) => {
        if (error) {
            res.status(400).json({ msg: "Error :" + error })
        } else {
            res.status(200).json({ msg: "Edit Gender Success",status:200, data: rows })
        }
    })
})

module.exports = router