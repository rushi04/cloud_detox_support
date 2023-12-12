// @ts-nocheck
const DeviceAllocatorFactory = require('./base');

class Noop extends DeviceAllocatorFactory {
  _createDriver() {
    const CloudAndroidAllocDriver = require('../drivers/android/cloud/CloudAndroidAllocDriver');
    return new CloudAndroidAllocDriver();
  }
}
  
module.exports = {
  Noop
};