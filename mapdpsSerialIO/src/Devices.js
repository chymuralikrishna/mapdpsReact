const erialPort = require('@serialport/list');

erialPort.list().then(ports => {
  ports.forEach(port => {
    console.log(port.path);
  });
});



