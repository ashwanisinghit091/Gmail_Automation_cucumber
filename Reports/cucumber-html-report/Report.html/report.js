$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Login",
  "description": "",
  "id": "gmail-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Gmail Homepage Login",
  "description": "",
  "id": "gmail-login;gmail-homepage-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "when user login in gmail with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Homepage is appear",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on compose mail \"receivermailid\" with attachment and emoji",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "mail is suuccessfully sent",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "gmail-login;gmail-homepage-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "gmail-login;gmail-homepage-login;;1"
    },
    {
      "cells": [
        "ashwanis824@gmail.com",
        "Pinki@50S"
      ],
      "line": 13,
      "id": "gmail-login;gmail-homepage-login;;2"
    },
    {
      "cells": [
        "ashwanis824@gmail.com",
        "Pinki@50S"
      ],
      "line": 14,
      "id": "gmail-login;gmail-homepage-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Gmail Homepage Login",
  "description": "",
  "id": "gmail-login;gmail-homepage-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "when user login in gmail with ashwanis824@gmail.com and Pinki@50S",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Homepage is appear",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on compose mail \"receivermailid\" with attachment and emoji",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "mail is suuccessfully sent",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.User_is_on_landing_page()"
});
formatter.result({
  "duration": 5067107418,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d76.0.3809.100)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027ASHWANI_SINGH\u0027, ip: \u0027192.168.136.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 75.0.3770.140 (2d9f97485c7b..., userDataDir: C:\\Users\\ASHWAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:65041}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 22908f9b4fc2c21259bf26cd13a0b835\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat stepDefinations.stepDefination.User_is_on_landing_page(stepDefination.java:35)\r\n\tat ✽.Given User is on landing page(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashwanis824@gmail.com",
      "offset": 30
    },
    {
      "val": "Pinki@50S",
      "offset": 56
    }
  ],
  "location": "stepDefination.when_user_login_in_gmail_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.Homepage_is_appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "receivermailid",
      "offset": 28
    }
  ],
  "location": "stepDefination.user_click_on_compose_mail_something_with_attachment_and_emoji(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.mail_is_suuccessfully_sent()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Gmail Homepage Login",
  "description": "",
  "id": "gmail-login;gmail-homepage-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "when user login in gmail with ashwanis824@gmail.com and Pinki@50S",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Homepage is appear",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on compose mail \"receivermailid\" with attachment and emoji",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "mail is suuccessfully sent",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.User_is_on_landing_page()"
});
formatter.result({
  "duration": 3789689685,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d76.0.3809.100)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027ASHWANI_SINGH\u0027, ip: \u0027192.168.136.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 75.0.3770.140 (2d9f97485c7b..., userDataDir: C:\\Users\\ASHWAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:65054}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 67104a96517f4477f1ca35056c18d54d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat stepDefinations.stepDefination.User_is_on_landing_page(stepDefination.java:35)\r\n\tat ✽.Given User is on landing page(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashwanis824@gmail.com",
      "offset": 30
    },
    {
      "val": "Pinki@50S",
      "offset": 56
    }
  ],
  "location": "stepDefination.when_user_login_in_gmail_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.Homepage_is_appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "receivermailid",
      "offset": 28
    }
  ],
  "location": "stepDefination.user_click_on_compose_mail_something_with_attachment_and_emoji(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.mail_is_suuccessfully_sent()"
});
formatter.result({
  "status": "skipped"
});
});