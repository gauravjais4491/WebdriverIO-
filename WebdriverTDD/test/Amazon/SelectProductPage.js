class SelectProductPage {
    async goToProductPage() {

        try {
            const selectProduct = await $("span*=Haldiram's Nagpur Kaju Katli (500 gm)")
            await selectProduct.waitForDisplayed({ timeout: 10000 })
            await selectProduct.click()
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Amazon/Screenshots/${error}.png`)
            throw error;
        }
    }
}
export { SelectProductPage }