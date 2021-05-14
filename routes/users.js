const express = require('express')

const router = express.Router();
const userController = require('./controllers/users.js');
let person =[];

router.get('/',(req,res)=>{
    res.send(person);
});
router.post('/add',userController.createUser);
router.get('/:id',userController.getUserById);
router.delete('/:id',userController.deleteUser);
router.patch('/:id',userController.updateUser);

module.exports = router;