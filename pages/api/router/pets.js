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

module.exports = router