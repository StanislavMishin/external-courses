class Apartment {
  constructor(numberApartments) {
    this.numberApartments = numberApartments;
  }

  findDeviceByName(findName) {
    return this.includedDevice.find((currentDevice) => currentDevice.nameDevice === findName);
  }
}
class Room extends Apartment {
  constructor(numberApartments, nameRoom, ...includedDevice) {
    super(numberApartments);
    this.nameRoom = nameRoom;
    this.includedDevice = includedDevice;
  }

  getOverallPower() {
    return this.includedDevice.filter((currentDevice) => currentDevice.included === true)
      .reduce((accum, device) => accum + device.power, 0);
  }
}

class Device {
  constructor(nameDevice, price, power, included) {
    this.nameDevice = nameDevice;
    this.price = price;
    this.power = power;
    this.included = included;
  }
}

const kettle = new Device('kettle', 3800, 2000, true);
const toaster = new Device('toaster', 12000, 850, true);
const blender = new Device('blender', 9900, 900, false);
const oven = new Device('oven', 25000, 3000, true);

const kitchen = new Room('kitchen', kettle, toaster, blender, oven);

module.exports = kitchen;
