

/* globals gauge*/
const {
    browser, page, openBrowser, closeBrowser, goto, reload, $, link, listItem, waitFor,
    inputField, fileField, textField, image, button, comboBox, checkBox, radioButton, alert,
    prompt, confirm, beforeunload, text, click, doubleClick, rightClick, write, press, deleteCookies,
    attach, highlight, focus, scrollTo, scrollRight, scrollLeft, scrollUp, scrollDown, below,
    hover, screenshot, timeoutSecs, intervalSecs, waitForNavigation, to, into, dismiss, accept,
    intercept, toRightOf,setLocation,overridePermissions,evaluate
} = require('taiko');
const assert = require("assert");

// beforeSuite(async () => {
//     await openBrowser({ headless: false }, { args: ["--start-fullscreen"] });
//     await goto("https://in.bookmyshow.com");
// });
step("Open the browser", async () => {
    await openBrowser({ headless: false }, { args: ["--start-fullscreen"] });

});

step("Navigate to URL", async () => {
    await goto("https://in.bookmyshow.com");
})
step("Enter the city name <city>", async (city) => {
    //await click($("//input[@id='inp_RegionSearch_top']"));
    await click("View All Cities")
    assert.ok(await text("Coimbatore").exists(), "Coimbatore city is not present the page");
    await click(city);
    //   await press("Enter");
});
step("Search for the movie <movie>", async (movie) => {
    await click($("//input[@placeholder='Search for Movies, Events, Plays, Sports and Activities']"));
    await write(movie);
    await press("Enter");
});

step("Select the date <date>", async (date) => {
    await click(date);
});

step("Select the theatre <theatre> and the time of the show <time>", async (theatre, time) => {
    var movieTime = "//a[@data-showtime-code=" + time + "]"
    await click($(movieTime, toRightOf(theatre)));
    await click("Accept");
});

step("Select the number of seats to be booked <seats>", async (seats) => {
    var xpath = "//ul[@id='popQty']//li[text()=" + seats + "]";
    await click($(xpath));
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

// afterSuite(async () => {
//     await closeBrowser();
// });

step("Check the ticket for <tickettype>", async (tickettype) => {
    assert.ok(await text("Available", below(tickettype)).exists(), "Tickets not available for GOLD");
})

step("Select language <lang>", async (lang) => {
    var xpath = "//a[@class='nav-link']";
    await click($(xpath));
    await click(lang);
});

step("Geolocation",async()=>{
    
    // await setLocation({ latitude: 27.1752868, longitude: 70.040009, accuracy:20 });
    // await overridePermissions('http://maps.google.com',['geolocation']);
    
    // await goto('http://maps.google.com');
    // await waitFor(1000);
   
        try {
            await openBrowser({headless:false});
            // await overridePermissions('https://the-internet.herokuapp.com/geolocation',['geolocation']);
            await overridePermissions('www.google.co.in/maps/',['geolocation']);
    
            await setLocation({longitude: 70.040009, latitude: 27.1752868, accuracy:20});
            await goto('www.google.co.in/maps/');
            // await goto('https://the-internet.herokuapp.com/geolocation');
            // const geolocation = await evaluate(() => new Promise(resolve => navigator.geolocation.getCurrentPosition(position => {
            //     resolve({latitude: position.coords.latitude, longitude: position.coords.longitude});
            // })));
            // console.log(geolocation.result);
        } catch (e) {
            console.error(e);
        } finally {
            // await closeBrowser();
        }
    });
