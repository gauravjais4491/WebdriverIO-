// import { expect } from "chai";
describe('Test Screenshot on Failure', () => {
    it('should fail intentionally', async () => {
        await browser.url('https://webdriver.io');
        await expect(browser).toHaveTitle("Intentionally failure")
    });
});