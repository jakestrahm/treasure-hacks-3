const express = require('express');
const app = express();
app.listen(3001, () =>{
  console.log('listing to port 3001');
});

app.get('/',(req,res)=>{
  res.send('root file');
});

app.get('/api/account/:id',(req,res) =>{
  res.send({id : 999});
});

app.get('/api/accounts', (req,res) =>{
  res.send({
      accounts : [
        {id : 123213},
        {id : 21313}
      ]
    }
  );
})

app.patch('/api/account',(req,res) =>{
  res.send({account : 'updated info!'});
});

app.post('/api/account',(req,res) =>{
  res.send({response: 'account was made!'});
});

app.get('/api/categories/:id',(req,res) =>{
  res.send({id: 999});
});

app.get('/api/categories', (req,res) =>{
  res.send({
      categories : [
        {name : 'school'},
        {name : 'gym'}
      ]
    }
  );
});

app.patch('/api/categories/:id',(req,res) =>{
  res.send({response : 'category was updated'});
});

app.delete('api/categories/:id',(req,res) =>{
  res.send({response : 'deleted id'});
})