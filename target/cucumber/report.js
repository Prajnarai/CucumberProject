$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order for Vegetables",
  "description": "",
  "id": "search-and-place-order-for-vegetables",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Search for items and validate results",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-validate-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User searched for Cucumber Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "\"Cucumber\" results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinations.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 12106759700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 18
    }
  ],
  "location": "MyStepDefinations.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3443688600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "MyStepDefinations.something_results_are_displayed(String)"
});
formatter.result({
  "duration": 98719900,
  "status": "passed"
});
formatter.after({
  "duration": 331718200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User searched for \u003cName\u003e Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify selected \u003cName\u003e items are displayed in Check out page",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 19,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 20,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 21,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User searched for Brinjal Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify selected Brinjal items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinations.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 9453602800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 18
    }
  ],
  "location": "MyStepDefinations.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3402194900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinations.added_items_to_cart()"
});
formatter.result({
  "duration": 385512000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinations.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 320326800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2099773800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User searched for Beetroot Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify selected Beetroot items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinations.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 10276450500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 18
    }
  ],
  "location": "MyStepDefinations.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3431419500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinations.added_items_to_cart()"
});
formatter.result({
  "duration": 275771200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinations.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 300460100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 244502300,
  "status": "passed"
});
});