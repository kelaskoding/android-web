const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('Hello from Android');
});

app.listen(8080);
