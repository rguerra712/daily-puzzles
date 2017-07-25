(function() {
    'use strict';

    require('chromedriver');
    const robot = require('robotjs');
    const webdriver = require('selenium-webdriver');
    const by = webdriver.By;
    const until = webdriver.until;

    const driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    let url = `file://${__dirname}/dailypuzzles.html`;
    driver.get(url);
    driver.findElement(by.id('print')).click();

    // Click enter to acknowledge print
    driver.sleep(2000)
        .then(() => {
            robot.keyTap("enter");
        });

    // Click enter to print to default printer
    driver.sleep(2000)
        .then(() => {
            robot.keyTap("enter");
        });

    // One more for good measure 
    driver.sleep(2000)
        .then(() => {
            robot.keyTap("enter");
        });

    driver.quit()
        .then(() => process.exit());

}());