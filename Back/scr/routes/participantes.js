const express = require('express');
const router = express.Router();

const mySqlConnection = require('../database');

// getAll
router.get('/', (req, res)=>{
    mySqlConnection.query('SELECT * FROM participantes', (err, rows, fields) =>{
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

//getId
router.get('/:idParticipante', (req, res)=>{
    const { idParticipante } = req.params;
    mySqlConnection.query('SELECT * FROM participantes WHERE idParticipante = ?', [idParticipante], (err, rows, fields) => {
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

//insert participantes 
router.post('/', (req , res) =>{
    const { idtipoDoc, nroDoc, nombre, apellido, fechaNac, nroCel, nroCelEmergencia,mail } = req.body;
    const query = `
    SET @idtipoDoc = ?; 
    SET @nroDoc = ?; 
    SET @nombre = ?; 
    SET @apellido = ?; 
    SET @fechaNac = ?; 
    SET @nroCel = ?;
    SET @nroCelEmergencia = ?;
    SET @mail = ?;   
    INSERT INTO participantes ( idtipoDoc, nroDoc, nombre, apellido, fechaNac, nroCel, nroCelEmergencia,mail) VALUES ( @idtipoDoc, @nroDoc, @nombre, @apellido, @fechaNac, @nroCel, @nroCelEmergencia,@mail)`;
    mySqlConnection.query(query, [idtipoDoc,nroDoc,nombre,apellido,fechaNac,nroCel,nroCelEmergencia,mail], (err, rows, fields) => {
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 

});

// Update
router.put('/:idParticipante', (req, res) =>{
    const { idParticipante } = req.params;
    const { idtipoDoc,nroDoc,nombre,apellido,fechaNac,nroCel,nroCelEmergencia,mail } = req.body;
    const query = `
    SET @idParticipante = ?; 
    SET @idtipoDoc = ?; 
    SET @nroDoc = ?; 
    SET @nombre = ?; 
    SET @apellido = ?; 
    SET @fechaNac = ?; 
    SET @nroCel = ?;
    SET @nroCelEmergencia = ?;
    SET @mail = ?;  
    UPDATE participantes SET idtipoDoc = @idtipoDoc, nroDoc = @nroDoc, nombre = @nombre, apellido = @apellido, fechaNac =  @fechaNac, nroCel = @nroCel, nroCelEmergencia = @nroCelEmergencia, mail = @mail WHERE idParticipante = @idParticipante` 
    mySqlConnection.query(query, [idParticipante,idtipoDoc,nroDoc,nombre,apellido,fechaNac,nroCel,nroCelEmergencia,mail], (err, rows, fields) =>{
        if(!err){ 
            res.json(rows); 
        }else{
            console.log(err);
        }
    });
});

//delete
router.delete('/:idParticipante', (req, res) =>{
    const { idParticipante } = req.params;
    mySqlConnection.query('DELETE FROM participantes WHERE idParticipante = ?', [idParticipante], (err, rows, fields) => {
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 

});

module.exports = router;