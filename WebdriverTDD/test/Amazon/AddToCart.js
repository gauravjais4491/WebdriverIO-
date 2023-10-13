class AddToCart {
    async goToViewCartPage() {
        try {
            const IsProductAddedToCart = await $("span*=Added to Cart")
            await IsProductAddedToCart.waitForDisplayed({ timeout: 10000 })
            const goToCart = await $(`a*=Go to Cart`)
            await goToCart.waitForDisplayed({ timeout: 10000 })
            await goToCart.click()
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Amazon/Screenshots/${error}.png`)
            throw error;
        }
    }
}
export { AddToCart }