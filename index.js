 
 const express = require('express');
 const bodyParser = require('body-parser');
 const nodemailer = require('nodemailer');
 const cors = require('cors');
 require('dotenv').config();

 const app =  express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(cors());


 app.get('/', ()=>{
     resizeBy.send('welcome to email form')
 })
app.post('/api/form', (req, res)=> {
    let data = req.body;
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth:{
            user: process.env.email,
            password: process.env.password
        }
    })
    let mailOptions = {
        from:data.email, 
        to:process.env.email,
        subject: `Message from ${data.name}`,
        html: `
        <h3>Information</h3>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Last name: ${data.lastname}</li>
            <li>Email: ${data.email}</li>
        </ul>
        
        <h3>Message</h3>
        <p>${data.message}</p>        
        
        `
    };
    smtpTransport.sendMail(mailOptions, (error, response)=>{
        if(error){
            res.send(error)
        } else{
            res.send('Success')
        }
    })

    smtpTransport.close();

})