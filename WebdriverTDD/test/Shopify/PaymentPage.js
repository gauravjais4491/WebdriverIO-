class PaymentPage {
    async goToPaymentDetailsPage() {
        try {
            const continue_To_Payment_Button = await $(`[class="QT4by _1fragemew rqC98 hodFu _7QHNJ VDIfJ j6D1f janiy"]`)
            await continue_To_Payment_Button.waitForDisplayed({ timeout: 10000 });
            await continue_To_Payment_Button.click()
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Shopify/Screenshots/ErrorOccuredInPaymentPage_${error}.png`)
            throw error;
        }
    }
}
export { PaymentPage }