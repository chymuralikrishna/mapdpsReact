const { SerialPort } = require('serialport');
import { Buffer } from 'node:buffer';
const listSerialPorts = async () => {
  const ports = await SerialPort.list()
  const portList = ports.map(port => ({
    path: port.path,
    manufacturer: port.manufacturer,
    serialNumber: port.serialNumber,
    pnpId: port.pnpId,
    locationId: port.locationId,
    productId: port.productId,
    vendorId: port.vendorId
  }));
  const jsonArray = JSON.stringify(portList)
  // console.log(portList);
  return jsonArray;

}

function readSerialPort(port, baudRate, timeout) {
  console.log(port);
  return new Promise((resolve, reject) => {
    const value = { chunk: null };
    try {
    const serialPort = new SerialPort( port,{baudRate: baudRate });
    serialPort.once('open', () => {
      console.log(`Serial port ${port} opened.`);
    });

    let timer = null;
    serialPort.once('data', (data) => {
      console.log(`Received data from serial port: ${data}`);
      const buf = Buffer.from(data);
      clearTimeout(timer);
      resolve(buf.readDoubleBE(0));
      serialPort.close();
    });

    serialPort.once('error', (err) => {
      console.error(`Error reading from serial port: ${err}`);
      clearTimeout(timer);
      reject(value);
      serialPort.close();
    });

    timer = setTimeout(() => {
      console.error(`Timeout reading from serial port.`);
      resolve({ chunk: null,err: 'Serial port in not available'});
      serialPort.close();
      reject(new Error(`Timeout reading from serial port.`));
    }, timeout);
  } catch (error) {
    resolve({ chunk: null,err: error});
  }
  });
}

// getPorts();
module.exports = { readSerialPort, listSerialPorts };
