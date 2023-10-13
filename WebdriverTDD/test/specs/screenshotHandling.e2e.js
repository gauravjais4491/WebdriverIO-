
describe('Screenshot Handling Test', () => {
    it('should take a screenshot', async () => {
        try {
            await browser.url('https://webdriver.io');
        }
        catch (error) {
            await browser.saveScreenshot('./screenshots/webdriverio_home1.png');
        }
    });
});

