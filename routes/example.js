const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    return res.status(200).send('<h1>Soy el endpoint de test</h1>');
})


module.exports = router;