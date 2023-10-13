describe("My First Demo Test", () => {
    it("should visit base url", async () => {
        await browser.url("https://google.com");
        await expect(browser).toHaveTitle("Google");
        await $("#APjFqb").setValue("webdriverio");
        await $("#APjFqb").waitForDisplayed()
        // await $('[name="btnK"]').click();
        await browser.keys('Enter');
        await $(".LC20lb.MBeuO.DKV0Md").click()


        

        await browser.pause(3000);
    })
})