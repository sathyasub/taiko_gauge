

/* globals gauge*/
const { openBrowser, closeBrowser, goto, intercept } = require('taiko');
step("Intercept", async () => {
    // intercept("https://c5fef9d7-f949-42de-9b73-8e4d469072c8.mock.pstmn.io/mocking", "https://faa46ffb-60f1-4695-a042-a81a27e30024.mock.pstmn.io/vodqa");
    try {
        await openBrowser({ headless: false }, { args: ["--start-fullscreen"] });
        url="https://c5fef9d7-f949-42de-9b73-8e4d469072c8.mock.pstmn.io/mocking";
        responseBody="mocked dropdown page";
        jsonString="{\"name\":\"Jon\",\"age\":\"20\"}";
        // await intercept("https://in.bookmyshow.com", "https://www.makemytrip.com/flights/")
        // intercept("https://c5fef9d7-f949-42de-9b73-8e4d469072c8.mock.pstmn.io/mocking", 
        // "https://faa46ffb-60f1-4695-a042-a81a27e30024.mock.pstmn.io/vodqa");
        // await intercept(url, { body: JSON.parse("[\"mocked\",\"dropdown\",\"page\"]") });
        // await intercept(url, { body: responseBody });
        await intercept(url, { body: JSON.parse(jsonString) });
        await goto(url);
        // await goto("https://in.bookmyshow.com/coimbatore");
    } catch (error) {
        console.error(error);
    } finally {
        // await closeBrowser();
    }
})
