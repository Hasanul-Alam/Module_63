const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send("I am doing web development on windows 11. And it is not too great!");
});

const users = [
    {id: 0, name: 'Nisat', email:'nisat@gmail.com', phone: '01797848511'},
    {id: 1, name: 'Hasnahena', email:'hasnahena@gmail.com', phone: '01797848511'},
    {id: 2, name: 'Sumaiya', email:'sumaiya@gmail.com', phone: '01797848511'},
    {id: 3, name: 'Liza', email:'liza@gmail.com', phone: '01797848511'},
    {id: 4, name: 'Taniya', email:'taniya@gmail.com', phone: '01797848511'},
    {id: 5, name: 'Tamanna', email:'tamanna@gmail.com', phone: '01797848511'},
]

app.get('/users', (req,res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.listen(port, ()=>{
    console.log("Listening to port ", port);
});