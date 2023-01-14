const express = require('express');
const app = express();
app.listen(3001, () =>{
  console.log('listing to port 3001');
});

app.get('/',(req,res)=>{
  res.send('root file');
});

app.get('/api/account',(req,res) =>{
  res.send({'id' : 999});
});

app.patch('/api/account',(req,res) =>{
  res.send({'account' : 'updated info!'})
});

app.post('/api/account',(req,res) =>{
  res.send({'response' : 'account was made!'})
});


