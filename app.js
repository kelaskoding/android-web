const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('Hello from Android');
});

app.listen(process.env.PORT || 8080);
