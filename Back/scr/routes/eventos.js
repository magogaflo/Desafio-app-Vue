const express = require('express');
const router = express.Router();

const mySqlConnection = require('../database');

// getAll
router.get('/', (req, res) => {
    mySqlConnection.query('SELECT * FROM eventos', (err, rows, fields) => {
        //mySqlConnection.query('SELECT *  FROM eventos e JOIN tipoeventos te ON e.idTipoEvento = te.idTipoEvento JOIN lugares as Lugar ON e.idLugar = Lugar.idLugar ', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//getId
router.get('/:idEvento', (req, res) => {
    const { idEvento } = req.params;
    mySqlConnection.query('SELECT * FROM eventos WHERE idEvento = ?', [idEvento], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// insert eventos
router.post('/', (req, res) => {
    const { idTipoEvento, idLugar, nombre, fecha, hora, cupo, nombreDisertante } = req.body;
    const query = `
    SET @idTipoEvento = ?; 
    SET @idLugar = ?; 
    SET @nombre = ?; 
    SET @fecha = ?; 
    SET @hora = ?; 
    SET @cupo = ?; 
    SET @nombreDisertante = ?; 
    INSERT INTO eventos (idTipoEvento,idLugar,nombre,fecha,hora,cupo,nombreDisertante) VALUES ( @idTipoEvento, @idLugar,@nombre,@fecha,@hora,@cupo,@nombreDisertante)`;
    mySqlConnection.query(query, [idTipoEvento, idLugar, nombre, fecha, hora, cupo, nombreDisertante], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// update eventos
router.put('/:idEvento', (req, res) => {
    const { idEvento } = req.params;
    const { idTipoEvento, idLugar, nombre, fecha, hora, cupo, nombreDisertante } = req.body;
    const query = `
    SET @idEvento = ?; 
    SET @idTipoEvento = ?; 
    SET @idLugar = ?; 
    SET @nombre = ?; 
    SET @fecha = ?; 
    SET @hora = ?; 
    SET @cupo = ?;
    SET @nombreDisertante = ?;
    UPDATE eventos SET idTipoEvento = @idTipoEvento, idLugar = @idLugar, nombre = @nombre, fecha = @fecha, hora = @hora, cupo = @cupo, nombreDisertante = @nombreDisertante WHERE idEvento = @idEvento`
    mySqlConnection.query(query, [idEvento, idTipoEvento, idLugar, nombre, fecha, hora, cupo, nombreDisertante], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//delete
router.delete('/:idEvento', (req, res) => {
    const { idEvento } = req.params;
    mySqlConnection.query('DELETE FROM eventos WHERE idEvento = ?', [idEvento], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

});

module.exports = router;