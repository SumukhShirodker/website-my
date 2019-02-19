const express = require('express')
const app = express()
app.set('view engine','ejs')

//main code
app.get('/',(req,res)=>{
  res.render('index')
})
//static stuff
app.get('/static/htmlplusstylescss',(req,res)=>{
  res.sendFile(__dirname+'/src/css/styles.css')
})
app.get('/static/_java_script',(req,res)=>{
  res.sendFile(__dirname+'/src/js/app.js')
})
app.get('/static/images/image/yt',(req,res)=>{
  res.sendFile(__dirname+'/src/images/yt.png')
})
app.get('/static/images/image/insta',(req,res)=>{
  res.sendFile(__dirname+'/src/images/insta.png')
})
app.get('/static/images/image/github',(req,res)=>{
  res.sendFile(__dirname+'/src/images/gh.png')
})
//listenig ports
app.listen(7070,()=>{
  console.log('running on Port 7070');
})