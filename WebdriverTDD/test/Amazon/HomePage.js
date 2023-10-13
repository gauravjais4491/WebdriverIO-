class HomePage {
    async goToSelectProductPage() {
        try {
            const textInput = await $("#twotabsearchtextbox")
            await textInput.waitForDisplayed({ timeout: 10000 })
            await textInput.click()
            await textInput.setValue("kaju katli haldiram 500gm")

            const clickToSearchBtn = await $("#nav-search-submit-button")
            await clickToSearchBtn.click()

        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Amazon/Screenshots/${error}.png`)
            throw error;
        }
    }
}
export { HomePage }