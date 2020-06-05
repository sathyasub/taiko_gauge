const {
    browser, page, openBrowser, closeBrowser, goto, dropDown,reload, $, link, listItem, waitFor,
    inputField, fileField, textField, image, button, comboBox, checkBox, radioButton, alert,
    prompt, confirm, beforeunload, text, click, doubleClick, rightClick, write, press, deleteCookies,
    attach, highlight, focus, scrollTo, scrollRight, scrollLeft, scrollUp, scrollDown, below,
    hover, screenshot, timeoutSecs, intervalSecs, waitForNavigation, to, into, dismiss, accept,
    intercept, toRightOf,setLocation,overridePermissions,evaluate
} = require('taiko');
const assert = require("assert");

step("Navigate to <url>", async (url) => {
    await goto(url);
})

step("Register to the website",async()=>{
    await click("SIGN-ON");
    await click("registration form");
})

step("Enter firstname <firstName>",async(firstName)=>{
    await click($("//input[@name='firstName']"));
    await write(firstName);
})
step("Enter lastname <lastName>",async(lastName)=>{
    await click($("//input[@name='lastName']"));
    await write(lastName);
})
step("Enter phoneNumber <phoneNumber>",async(phoneNumber)=>{
    await click($("//input[@name='phone']"));
    await write(phoneNumber);
})
step("Enter mail <mail>",async(mail)=>{
    await click($("//input[@name='userName']"));
    await write(mail);
})

step("Enter the address <address>",async(address)=>{
    await click($("//input[@name='address1']"));
    await write(address);
    await click($("//input[@name='city']"));
    await write(address);
    await click($("//input[@name='state']"));
    await write(address);
    await click($("//input[@name='postalCode']"));
    await write("123456");
    await waitFor(1000)
await dropDown({name:'country'}).select('INDIA')
   
})
step("Enter Username <Username>",async (Username)=>{
    await click($("//input[@name='email']"));
    await write(Username);
});
step("Enter Password <Password>",async(Password)=>{
    await click($("//input[@name='passwordd']"));
    await write(Password);
    await click($("//input[@name='confirmPassword']"));
    await write(Password);
});
step("Click Register",async()=>{
    // await screenshot({path : 'screenshot.png'})
    await screenshot({fullPage:true})
await click($("//input[@name='register']"));
});