import express from 'express';

const app = express();

app.get('/Hello',(req,res) =>{

    
    res.send("Hello");


})

const PORT = 8011;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
