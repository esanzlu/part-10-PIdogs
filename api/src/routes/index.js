const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRoute = require('../routes/routedogs')
const tempRoute = require('../routes/routetemp.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs',dogsRoute);
router.use('/temperaments',tempRoute);

module.exports = router;
