const express = require('express'),
    router = express.Router(),
    userController = require('../controller/user.js');


router.get('/user', userController.userAll);
router.get('/user/:id', userController.userOne);
router.put('/user/:id', userController.update);
router.post('/user', userController.create);
router.delete('/user/:id', userController.delete);

module.exports = router;