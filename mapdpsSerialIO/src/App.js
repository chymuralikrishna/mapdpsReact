const express=require("express")

const app=express();

app.get('/',(req,res)=>{
    return res.json({name:"murali"});
});
app.listen(3010, () => {
    console.log('Server started on port 3000');
  });