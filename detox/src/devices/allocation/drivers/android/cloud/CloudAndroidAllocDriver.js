/**
 * @typedef {import('../../AllocationDriverBase').AllocationDriverBase} AllocationDriverBase
 * @typedef {import('../../../../common/drivers/android/cookies').AndroidDeviceCookie} AndroidDeviceCookie
 */

/**
 * @implements {AllocationDriverBase}
 */
class CloudAndroidAllocDriver {
  /**
   * @param {object} options
   * @param {import('../../../../common/drivers/android/exec/ADB')} options.adb
   * @param {import('../../../DeviceRegistry')} options.deviceRegistry
   * @param {import('../FreeDeviceFinder')} options.freeDeviceFinder
   */
  constructor() {

  }

  async init() {
  }

  /**
   * @param deviceConfig
   * @return {Promise<AndroidDeviceCookie>}
   */
  async allocate(deviceConfig) {
    return { id: null, adbName: null };
  }

  /**
   * @param {AndroidDeviceCookie} deviceCookie
   * @returns {Promise<void>}
   */
  async postAllocate(deviceCookie) {
    return Promise.resolve();
  }

  /**
   * @param cookie { AndroidDeviceCookie }
   * @return {Promise<void>}
   */
  async free(cookie) {
    return Promise.resolve();
  }
}

module.exports = CloudAndroidAllocDriver;
