const express = require('express')
const app = express()
app.set('view engine','ejs')
//main code

app.get('/',(req,res)=>{
  res.render('index')
})
//static stuff
app.get('/static/htmlplusstylescss',(req,res)=>{
  res.sendFile(__dirname+'/src/styles/styles.css')
})
app.get('/static/_java_script',(req,res)=>{
  res.sendFile(__dirname+'/src/js/app.js')
})
app.get('/static/img/image/yt',(req,res)=>{
  res.sendFile(__dirname+'/src/img/yt.png')
})
app.get('/static/img/image/insta',(req,res)=>{
  res.sendFile(__dirname+'/src/img/insta.png')
})
app.get('/static/img/image/github',(req,res)=>{
  res.sendFile(__dirname+'/src/img/gh.png')
})

app.listen(7070,()=>{
  console.log('running on Port 7070');
})