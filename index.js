const cors = require('cors');
const express = require('express');
const logic = require('./services/logics');
const cmsServer = express();

cmsServer.use(cors({
    origin: 'http://localhost:3000' // Adjust if needed
}));

cmsServer.use(express.json());

cmsServer.listen(8000, () => {
    console.log('Cms Server listening on the port 8000');
});

cmsServer.get('/get-all-users', (req, res) => {
    logic.getAllContacts().then((response) => {
        res.status(response.statusCode).json(response);
    });
});

// Other endpoints...


// API call for adding an employee detail localhost:8000/add-employee
cmsServer.post('/add-users', (req, res) => {
    logic.addContact(req.body.id, req.body.name, req.body.phone, req.body.email).then((response) => {
        res.status(response.statusCode).json(response);
    });
});

cmsServer.delete('/delete-an-users/:id', (req, res) => {
    logic.deleteContact(req.params.id).then((response) => {
        res.status(response.statusCode).json(response);
    });
});

cmsServer.get('/get-an-users/:id', (req, res) => {
    logic.getAnContact(req.params.id).then((response) => {
        res.status(response.statusCode).json(response);
    });
});

cmsServer.post('/update-an-users/:id', (req, res) => {
    logic.updateContact(req.params.id, req.body.name, req.body.phone, req.body.email).then((response) => {
        res.status(response.statusCode).json(response);
    });
});
