const express = require('express');
const router = express.Router();

const mySqlConnection = require('../database');

//getAll
router.get('/', (req, res)=>{
    mySqlConnection.query('SELECT * FROM lugares', (err, rows, fields) =>{
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

//getId
router.get('/:idLugar', (req, res)=>{
    const { idLugar } = req.params;
    mySqlConnection.query('SELECT * FROM lugares WHERE idLugar = ?', [idLugar], (err, rows, fields) =>{
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

// insert lugares
router.post('/', (req , res) =>{
    const { nombre, calle, nro, barrio } = req.body;
    const query = ` 
    SET @nombre = ?;
    SET @calle = ?;
    SET @nro = ?;
    SET @barrio = ?; 
    INSERT INTO lugares ( nombre, calle, nro, barrio )  VALUES ( @nombre, @calle, @nro, @barrio )`;
    mySqlConnection.query(query, [nombre,calle,nro,barrio], (err, rows, fields) =>{
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

// update lugares
router.put('/:idLugar', (req, res) =>{
    const { idLugar } = req.params;
    const { nombre, calle, nro, barrio } = req.body;
    const query = `
    SET @idLugar = ?;  
    SET @nombre = ?;
    SET @calle = ?;
    SET @nro = ?;
    SET @barrio = ?; 
    UPDATE lugares SET nombre = @nombre, calle = @calle, nro = @nro, barrio = @barrio WHERE idLugar = @idLugar` 
    mySqlConnection.query(query, [idLugar,nombre,calle,nro,barrio], (err, rows, fields) =>{
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

//delete
router.delete('/:idLugar', (req, res) =>{
    const { idLugar } = req.params;
    mySqlConnection.query('DELETE FROM lugares WHERE idLugar = ?', [idLugar], (err, rows, fields) => {
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

module.exports = router;