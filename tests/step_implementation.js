/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser,click, goto, press, text, focus, textBox, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

// beforeScenario(async() => await openBrowser());
beforeSuite(async () => {
    await openBrowser({ headless: headless })
});
step('Navigate to URL <url>', async (url) => {
await goto(url)
await click("NCR");
});

// afterSuite(async () => {
//     await closeBrowser();
// });

// step("Goto getgauge github page", async () => {
//     await goto('https://github.com/getgauge');
// });

// step("Search for <query>", async (query) => {
//     await focus(textBox(toRightOf('Pricing')))
//     await write(query);
//     await press('Enter');
// });

// step("Page contains <content>", async (content) => {
//     assert.ok(await text(content).exists());
// });
