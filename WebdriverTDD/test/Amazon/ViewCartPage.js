class ViewCartPage {
    async goToShippingAddressPage() {
        try {
            const proceedToBuyBtn = await $("[name='proceedToRetailCheckout']")
            await proceedToBuyBtn.waitForDisplayed({ timeout: 10000 })
            await proceedToBuyBtn.click()
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Shopify/Screenshots/${error}.png`)
        }

    }
    async setQuantity() {
        try {
            const setNumberOfProduct = await $(`[class="a-button-text a-declarative"]`)
            await setNumberOfProduct.waitForDisplayed({ timeout: 10000 })
            await setNumberOfProduct.click()

            const quantity = await $(`[name="quantity"]`)
            await quantity.selectByVisibleText("1")
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Amazon/Screenshots/${error}.png`)
            throw error;
        }

    }
}
export { ViewCartPage }