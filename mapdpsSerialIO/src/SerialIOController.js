const { SerialPort } = require('serialport');

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
  return new Promise((resolve, reject) => {
    const serialPort = new SerialPort({ path: port, baudRate: baudRate });
    const value = { chunk: null };
    serialPort.on('open', () => {
      console.log(`Serial port ${port} opened.`);
    });

    let timer = null;
    serialPort.on('data', (data) => {
      console.log(`Received data from serial port: ${data}`);
      clearTimeout(timer);
      value = data;
      resolve(value);
      serialPort.close();
    });

    serialPort.on('error', (err) => {
      console.error(`Error reading from serial port: ${err}`);
      clearTimeout(timer);
      reject(value);
      serialPort.close();
    });

    timer = setTimeout(() => {
      console.error(`Timeout reading from serial port.`);
      resolve(value);
      serialPort.close();
      reject(new Error(`Timeout reading from serial port.`));
    }, timeout);
  });
}

// getPorts();
module.exports = { readSerialPort, listSerialPorts };
