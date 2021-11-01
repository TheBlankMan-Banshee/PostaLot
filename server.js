const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors'); 
const knex = require('knex'); 
const register = require('./server/controllers/register');
//const register = require('./controllers/register');
const signIn = require('./server/controllers/signin');
//const signIn = require('./controllers/signin');
require('dotenv').config();

// config port
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

const db = knex({
    client: 'pg',
    connection: {
      connectionString : process.env.DATABASE_URL,
      ssl: {
          rejectUnauthorized: false,
      },
    },
});

// console.log(db.connection.connectionString);

app.get('/',(req,res) => {
    res.json(db.users);
});

app.post('/signin', signIn.handleSignIn(db,bcrypt)); // receives req and res in js file

app.post('/register',(req,res) => register.handleRegister(req,res,db,bcrypt)); // dependency injection: passing required objects so we don't need to import them

app.listen(PORT || 5000,() => {
    console.log(`Application is running on Port ${PORT}`);
    console.log('HELLO WORLD!');
});