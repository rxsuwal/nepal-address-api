const { default: axios } = require('axios');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Nepal Address API running!');
});

// GET ALL PROVINCE

app.get('/province', async (req, res) => {

    let response = {
        status: null,
        data: null
    }
    await axios.get('https://kaalvairab.github.io/nepal-address/data/provinces.json').then(res => {

        response.status = "success"
        response.data = res.data
    }).catch(err => {
        response.status = "fail"
        response.data = "Invalid query!"
    })
    res.send(response);

})

// GET ALL DISTRICTS
app.get('/district', async (req, res) => {

    let response = {
        status: null,
        data: null
    }
    await axios.get('https://kaalvairab.github.io/nepal-address/data/districts.json').then(res => {

        response.status = "success"
        response.data = res.data
    }).catch(err => {
        response.status = "fail"
        response.data = "Invalid query!"
    })
    res.send(response);

})
// GET DISTRICTS BY PROVINCE
app.get('/districtsByProvince', async (req, res) => {

    let response = {
        status: null,
        data: null
    }

    if (req.query.province) {
        await axios.get(`https://kaalvairab.github.io/nepal-address/data/districtsByProvince/${req.query.province}.json`).then(res => {

            response.status = "success"
            response.data = res.data
        }).catch(err => {
            response.status = "fail"
            response.data="Invalid query!"
        })
        res.send(response);
    } else {
        response.data = "Invalid Request !"
        res.status(400).send(response)
    }



})



// GET MUNICIPALS BY DISTRICTS
app.get('/municipalsByDistrict', async (req, res) => {

    let response = {
        status: null,
        data: null
    }

    if (req.query.district) {
        await axios.get(`https://kaalvairab.github.io/nepal-address/data/municipalsByDistrict/${req.query.district}.json`).then(res => {

            response.status = "success"
            response.data = res.data

        }).catch(err => {
            response.status = "fail"
            response.data = "Invalid query!"
        })
        res.send(response);
    } else {
        response.data = "Invalid Request !"
        res.status(400).send(response)
    }



})


app.listen(3000, () => {
    console.log('Server started on port 3000');
});
