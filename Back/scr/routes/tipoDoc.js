const express = require('express');
const router = express.Router();

const mySqlConnection = require('../database');

//getAll
router.get('/', (req, res)=>{
    mySqlConnection.query('SELECT * FROM tipoDoc', (err, rows, fields) =>{
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

//getId
router.get('/:idtipoDoc', (req, res)=>{
    const { idtipoDoc } = req.params;
    mySqlConnection.query('SELECT * FROM tipoDoc WHERE idtipoDoc = ?', [idtipoDoc], (err, rows, fields) => {
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

// insert tipoDoc
router.post('/', (req , res) =>{
    const { nombre } = req.body;
    const query = `
    SET @nombre = ?; 
    INSERT INTO tipoDoc (nombre)  VALUES ( @nombre )`;
    mySqlConnection.query(query, [nombre], (err, rows, fields) =>{
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

// update tipoDoc
router.put('/:idtipoDoc', (req, res) =>{
    const { idtipoDoc } = req.params;
    const { nombre } = req.body;
    const query = `
    SET @idtipoDoc = ?; 
    SET @nombre = ?; 
    UPDATE tipoDoc SET nombre = @nombre  WHERE idtipoDoc = @idtipoDoc` 
    mySqlConnection.query(query, [idtipoDoc, nombre], (err, rows, fields) => {
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

//delete
router.delete('/:idtipoDoc', (req, res) =>{
    const { idtipoDoc } = req.params;
    mySqlConnection.query('DELETE FROM tipoDoc WHERE idtipoDoc = ?', [idtipoDoc], (err, rows, fields) => {
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 

});

module.exports = router;