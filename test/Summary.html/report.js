$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ScenaioOutLine.feature");
formatter.feature({
  "line": 1,
  "name": "This feature is designed to validate multiple set of data",
  "description": "",
  "id": "this-feature-is-designed-to-validate-multiple-set-of-data",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "scenario description",
  "description": "",
  "id": "this-feature-is-designed-to-validate-multiple-set-of-data;scenario-description",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@multipleSetData"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a precondition has value \u003cBrowser\u003e and something with \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "check \u003cparam_3\u003e is the output",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "this-feature-is-designed-to-validate-multiple-set-of-data;scenario-description;",
  "rows": [
    {
      "cells": [
        "Browser",
        "url"
      ],
      "line": 10,
      "id": "this-feature-is-designed-to-validate-multiple-set-of-data;scenario-description;;1"
    },
    {
      "cells": [
        "Chrome",
        "http://demo.nopcommerce.com/"
      ],
      "line": 11,
      "id": "this-feature-is-designed-to-validate-multiple-set-of-data;scenario-description;;2"
    },
    {
      "cells": [
        "firefox",
        "http://demo.nopcommerce.com/"
      ],
      "line": 12,
      "id": "this-feature-is-designed-to-validate-multiple-set-of-data;scenario-description;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "scenario description",
  "description": "",
  "id": "this-feature-is-designed-to-validate-multiple-set-of-data;scenario-description;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@multipleSetData"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a precondition has value Chrome and something with http://demo.nopcommerce.com/",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "check \u003cparam_3\u003e is the output",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 25
    },
    {
      "val": "http://demo.nopcommerce.com/",
      "offset": 51
    }
  ],
  "location": "Tc_02_MultipleData.LaunchApplication(String,String)"
});
formatter.result({
  "duration": 266346506,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "scenario description",
  "description": "",
  "id": "this-feature-is-designed-to-validate-multiple-set-of-data;scenario-description;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@multipleSetData"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a precondition has value firefox and something with http://demo.nopcommerce.com/",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "check \u003cparam_3\u003e is the output",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 25
    },
    {
      "val": "http://demo.nopcommerce.com/",
      "offset": 52
    }
  ],
  "location": "Tc_02_MultipleData.LaunchApplication(String,String)"
});
formatter.result({
  "duration": 11231519013,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});