const assert = require('assert');
var _path = require('path');
const {
    browser, page, openBrowser, closeBrowser, goto, reload, $, link, listItem,
    inputField, fileField, textField, image, button, comboBox, checkBox, radioButton, alert,
    prompt, confirm, beforeunload, text, click, doubleClick, rightClick, write, press,
    attach, highlight, focus, scrollTo, scrollRight, scrollLeft, scrollUp, scrollDown,
    hover, screenshot, timeoutSecs, intervalSecs, waitForNavigation, to, into, dismiss, 
    accept,intercept, toRightOf
} = require('taiko');

beforeSuite (async()=>{
    await openBrowser({headless:true});
    await goto("https://in.bookmyshow.com/",{ navigationTimeout: 60000 });
});

step ("Get All Cities",async()=>{
    await click("View All Cities",{ navigationTimeout: 60000 });
    // await click("Coimbatore");
    await listItem({"class":"city-name "}).get().then(elements => console.log(elements.length));
    console.log(await listItem({class: 'city-name '}).text());
});

afterSuite(async () =>{
    await closeBrowser({headless:false});
});