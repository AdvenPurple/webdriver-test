# webdriver-test

## WebdriverIO based automation assignment for Later

Automated test that:
- Opens the LaterGear store
- Opens the shopping cart
- Validates that the cart is currently empy
- Selects an item ( a helmet )
- Adds the item to the shopping cart
- Validates that there is indeed one item added to to the shopping cart list (as in one *li* item to the *ul*)
- Validates that the item's quantity is also just one
- Validates that this item is the correct one ( the helmet ) 

## Contents
- test/specs folder contains the script that runs a test 
- Additional Files folder contains evidence of the Webdriver test run and an independent test created using the Selenium IDE Chrome extension

## Usage
- Download folder
- cd into it
- run "npm install" to get the needed dependencies
- run "npx wdio wdio.conf.js" to execute the test and have it open an instance of the Chrome Browser

## Requirements
- WebdriverIO set up
- Chrome Browser 88
