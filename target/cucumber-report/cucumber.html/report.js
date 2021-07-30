$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "\r\n\r\n\r\nAs a user I want to login into virgingames website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should see error message displayed with invalid credentials.",
  "description": "",
  "id": "login-functionality;user-should-see-error-message-displayed-with-invalid-credentials.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \"\u003cuserName\u003e\" in username field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-functionality;user-should-see-error-message-displayed-with-invalid-credentials.;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorMessage"
      ],
      "line": 16,
      "id": "login-functionality;user-should-see-error-message-displayed-with-invalid-credentials.;;1"
    },
    {
      "cells": [
        "primetime",
        "password04",
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 17,
      "id": "login-functionality;user-should-see-error-message-displayed-with-invalid-credentials.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10373039600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should see error message displayed with invalid credentials.",
  "description": "",
  "id": "login-functionality;user-should-see-error-message-displayed-with-invalid-credentials.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \"primetime\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"password04\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see error message \"Please try again, your username/email or password has not been recognised\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 472461100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 31258864900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "primetime",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterInUsernameField(String)"
});
formatter.result({
  "duration": 30035697300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //input[@id\u003d\u0027field-username\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3F7DLL86\u0027, ip: \u0027192.168.1.115\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 90.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210721174149, moz:geckodriverVersion: 0.29.1, moz:headless: false, moz:processID: 15672, moz:profile: C:\\Users\\mital\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a77bf53c-0fba-49bf-b505-d51968fb0802\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027field-username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.virgingames.utility.Utility.sendTextToElement(Utility.java:83)\r\n\tat com.virgingames.pages.LoginPage.enterUserName(LoginPage.java:25)\r\n\tat com.virgingames.stepdefs.MyStepdefs.iEnterInUsernameField(MyStepdefs.java:24)\r\n\tat ✽.And I enter \"primetime\" in username field(src/test/java/resources/featurefile/login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "password04",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 28
    }
  ],
  "location": "MyStepdefs.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1400270200,
  "status": "passed"
});
});