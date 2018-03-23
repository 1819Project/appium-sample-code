exports.ios = {
  browserName: '',
  'appium-version': '1.6',
  platformName: "iOS",
  platformVersion: "11.2",
  deviceName: "iPhone 6",
  // the app is inserted from apps.js in the test, e.g. ios-simple.js
  app: undefined, // will be set later
  automationName: "XCUITest"
};

exports.android18 = {
  browserName: '',
  'appium-version': '1.6',
  platformName: 'Android',
  platformVersion: '5.1',
  deviceName: 'Android Emulator',
  app: undefined // will be set later
};

exports.android19 = {
  browserName: '',
  'appium-version': '1.6',
  platformName: 'Android',
  platformVersion: '5.1',
  deviceName: 'Android Emulator',
  app: undefined // will be set later
};

exports.selendroid16 = {
  browserName: '',
  'appium-version': '1.6',
  platformName: 'Android',
  platformVersion: '5.1',
  automationName: 'selendroid',
  deviceName: 'Android Emulator',
  app: undefined // will be set later
};
