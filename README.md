# Appium Sample Code

## Introduction

This repo is a clone of https://github.com/appium/sample-code with whatever changes we need to make for it to work.
> Original readme: This repository contains sample applications which are used mostly by appium functional tests.

### iOS Testing (Files)

We're mostly interested in testing with node. Node tests can be found in sample-code/examples/node.

#### TestApp

This test depends on compiling the test app found at https://github.com/appium/ios-test-app. Build that sucker and be ready to change the path in `apps.js`, below, to its target's product.

#### helpers

The helpers directory holds a number of configuration files that are pulled into the test scripts.

* **appium-servers.js**

  indicates where the appium server is found. We only run locally now.

  ```javascript
  exports.local = {
    host: 'localhost',
    port: 4723
  };
  ```
  This expects you to have installed the appium server and to start it.

* **apps.js**

  ```javascript
  if (process.env.DEV) {
    // explicit path to build directory
    exports.iosTestApp = "/Users/jrgresh/Library/Developer/Xcode/DerivedData/TestApp-ezwhxykroqnrmvfcupialeyiajfy/Build/Products/Debug-iphonesimulator/TestApp.app";
  }
  ```
  Note: change the iosTestApp path to the full path to the compiled executable and define DEV in the environment:

  ```sh
  export DEV=1
  ```

* **caps.js**

  The Webdriverio Capabilities.
  ```javascript
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
  ```

  Note, the app property will be overwritten in the test:
  ```javascript
  var desired = _.clone(require("./helpers/caps").ios);
  desired.app = require("./helpers/apps").iosTestApp;
  ```

### iOS Testing (Steps)

Be sure appium is correctly installed.

#### Appium Server
```sh
brew install node      # get node.js
npm install -g appium  # get appium
appium &               # start appium
```

#### Appium client

```sh
npm install mocha -g
cd sample-code/examples/node
npm install webdriverio
npm install wd         # get appium client
```

#### Run

```sh
export DEV=1
mocha ios-simple.js
```
