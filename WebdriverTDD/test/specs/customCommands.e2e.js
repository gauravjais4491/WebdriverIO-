describe("Custom Commands Test", () => {
    it("should demonstrate the use of custom commands", async () => {
        // Arrange
        await browser.url("/")
        
        
        browser.addCommand('clickAndCheck', async function (expectedTitle) {
            await this.click();
            await browser.waitUntil(async () => !this.isExisting(), {
                timeout: 5000,
                timeoutMsg: 'expected element to disappear after click'
            });
            const title = await browser.getTitle();
            await expect(title).toHaveTitle(expectedTitle);
        });
        $(".h2").addCommand("ul-web-playground")
        console.log("Pass")
    })
})