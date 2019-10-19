
/* globals gauge*/

const assert = require('assert');
var _path = require('path');
const {
    browser, page, openBrowser, closeBrowser, goto, reload, $, link, listItem,
    inputField, fileField, textField, image, button, comboBox, checkBox, radioButton, alert,
    prompt, confirm, beforeunload, text, click, doubleClick, rightClick, write, press,
    attach, highlight, focus, scrollTo, scrollRight, scrollLeft, scrollUp, scrollDown,
    hover, screenshot, timeoutSecs, intervalSecs, waitForNavigation, to, into, dismiss, accept,intercept
} = require('taiko');

beforeSuite (async()=>{
    await openBrowser({headless:false},{args: ["--start-fullscreen"]});
    await goto("https://in.bookmyshow.com/");
});

step("Search for the movie <movie>",async (movie)=>{
    await click($("//input[@placeholder='Search for Movies, Events, Plays, Sports and Activities']"));
    await write(movie);
    await press("Enter");
});

step("Enter the city name <city>",async (city)=>{
   await click($("//input[@id='inp_RegionSearch_top']"));
   await write(city);
   await press("Enter");
});

step("Select the date <date>",async (date)=>{
await click(date);
});

step("Select the theatre <theatre> and the time of the show <time>",async (theatre,time)=>{
    await click(link(time),toRightOf(theatre))
});

afterSuite(async () =>{
    await closeBrowser();
});