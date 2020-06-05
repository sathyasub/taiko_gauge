const {
    browser, page, openBrowser, closeBrowser, goto, dropDown,reload, $, link, listItem, waitFor,
    inputField, fileField, textField, image, button, comboBox, checkBox, radioButton, alert,
    prompt, confirm, beforeunload, text, click, doubleClick, rightClick, write, press, deleteCookies,
    attach, highlight, focus, scrollTo, scrollRight, scrollLeft, scrollUp, scrollDown, below,
    hover, screenshot, timeoutSecs, intervalSecs, waitForNavigation, to, into, dismiss, accept,
    intercept, toRightOf,setLocation,overridePermissions,evaluate
} = require('taiko');
const assert = require("assert");

beforeSuite(async () => {
    await openBrowser({ headless: false }, { args: ["--window-size=2500,1500"] });
    await goto("https://in.bookmyshow.com");
});
step("Open the browser", async () => {
    await openBrowser({ headless: false }, { args: ["--start-fullscreen"] });

});

step("Navigate to URL", async () => {
    // await goto("https://in.bookmyshow.com");
    await goto("http://newtours.demoaut.com/");
})
step("Enter the city name <city>", async (city) => {
    //await click($("//input[@id='inp_RegionSearch_top']"));
    gauge.screenshot();
    await click("View All Cities")
    gauge.screenshot();
    assert.ok(await text("Coimbatore").exists(), "Coimbatore city is not present the page");
    gauge.screenshot();
    await click(city);
    //   await press("Enter");
});

step("Search for the movie <movie>", async (movie) => {
    await click($("//input[@placeholder='Search for Movies, Events, Plays, Sports and Activities']"));
    gauge.screenshot();
    await write(movie);
    await press("Enter");
});

step("Select the date <date>", async (date) => {
    gauge.screenshot();
    await click(date,{ navigationTimeout: 10000 });
});

step("Select the theatre <theatre> and the time of the show <time>", async (theatre, time) => {
    var movieTime = "//a[@data-showtime-code=" + time + "]"
    await deleteCookies();
    // sleep.sleep(100);
    gauge.screenshot();
    await click(time, toRightOf(theatre));
    gauge.screenshot();
    await click("Accept");
    gauge.screenshot();
});

step("Select the number of seats to be booked <seats>", async (seats) => {
    var xpath = "//ul[@id='popQty']//li[text()=" + seats + "]";
    await click($(xpath));
    gauge.screenshot();
    await click("Select Seats");
    await click($("//a[@id='dismiss']"));
});

step("Say <wish> to <name>", async (wish, name) => {
    console.log(wish + " to" + name);
})

step("Close the browser", async () => {
    await deleteCookies();
    await closeBrowser();

})

afterSuite(async () => {
    await deleteCookies();
    await closeBrowser();
});

step("Check the ticket for <tickettype>", async (tickettype) => {
    assert.ok(await text("Available", below(tickettype)).exists(), "Tickets not available for GOLD");
})

step("Select language <lang>", async (lang) => {
    var xpath = "//a[@class='nav-link']";
    await click($(xpath));
    await click(lang);
});

