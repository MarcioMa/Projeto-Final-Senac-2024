const express = require('express');
const router = express.Router();

// Importar controladores ou lógica de rota necessária
const { sendMail } = require('../controllers/authMail');

// Rota
router.post('/', sendMail);

module.exports = router;
