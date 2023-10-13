const pause = require("webdriverio");
describe("Basic UI Actions Test", () => {
    it("should demonstrate the basic UI Actions in WebDriverIO", async () => {
        
        await browser.url("https://web-playground.ultralesson.com/");
        let searchbar = await $(".header__search");     //selector used here by class
        await searchbar.click(); 
        // await browser.pause(5000);

        let searchField = await $("#Search-In-Modal"); //selector usd here by id
        await searchField.setValue("shoes");
        await searchField.addValue(" for men");

        // await browser.pause(5000);
        //await searchField.clearValue();
        //await browser.pause(5000);

        let searchIcon = await $('[class="search__button field__button"]'); //[Attribue = value] concept used.
        await searchIcon.click();
        //await browser.keys("Enter");
        // await browser.pause(5000);

        let dropDown = await $(`button*=India (INR ₹)`);
        await dropDown.click();
        await browser.pause(10000);

        await dropDown.selectByVisibleText("Albania (INR ₹)");
        await browser.pause(10000);
    });
});
