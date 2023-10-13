// import {expect} from 'chai'
describe("Nevigate to Website", () => {
    before(() => {
        console.log("Before")
    })
    beforeEach(() => {
        console.log("BeforeEach")
    })
    after(() => {
        console.log("After")
    })
    afterEach(() => {
        console.log("AfterEach")
    })
    it("should go to webdriverIO website", async () => {
        await browser.url("https://google.com")
        const title = await browser.getUrl();
        console.log('---------------------' + title + '----------------');
        await expect(browser).toHaveTitle("Google") 
        
    })
})