const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serialIOController = require('./SerialIOController');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get available serialports
app.get('/api/listPorts',async (req,res)=>{
  // perform some async operation
  const listPorts= await serialIOController.listSerialPorts();
  return res.send(listPorts);
  
});


// read data from ports by passing path, baudRate, timeout 
app.post('/api/readPort', async (req, res) => {
  // return res.json({ data: await serialIOController.readSerialPort('COM1',9600,2000) });
  return res.json({ data: await serialIOController.readSerialPort(req.body.path,req.body.baudrate,req.body.timeout) });
});

app.listen(3010, () => {
  console.log('Server started on port 3010');
});