const uuidv4 = require('uuid')
let person =[];
exports.createUser =(req,res)=>{
    const user = req.body;
    const userWithId = {...user,id: uuidv4.v4()}
    person.push(userWithId);    
    res.send(person)
}
exports.getUserById = (req,res)=>{
    const {id} = req.params;
    const foundUser = person.find((user)=> user.id===id);
    res.send(foundUser);
}
exports.deleteUser = (req,res)=>{
    const {id} = req.params;
    person = person.filter((user)=> user.id!==id)
    res.send(person);
}
exports.updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName, lastName,age} = req.body;
    const user = person.find((user)=> user.id===id);
    if(firstName)user.firstName = firstName;
    if(lastName)user.lastName = lastName;
    if(age)user.age = age;
    res.send(person);
}
// module.exports = createUser;