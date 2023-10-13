class PaymentDetails {
    async setPaymentMethod() {
        try {
            const addPaymentMethod = await $(`span*=Credit or debit card`)
            await addPaymentMethod.click()
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Amazon/Screenshots/${error}.png`)
            throw error;
        }

    };

    async goToCardDetails() {
        try {
            const addCardDetails = await $(`a*=Enter card details`)
            await addCardDetails.click()
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Amazon/Screenshots/${error}.png`)
            throw error;
        }

    };

    async addCardDetails() {
        try {
            const iframe = await $(`[name="ApxSecureIframe"]`)
            await iframe.waitForDisplayed({ timeout: 10000 })
            await browser.switchToFrame(iframe)

            const addCardNumber = await $(`[name="addCreditCardNumber"]`)
            await addCardNumber.setValue("6529221005703294")

            const addNameOnCard = await $(`[class="a-input-text a-form-normal apx-add-credit-card-account-holder-name-input mcx-input-fields"]`)
            await addNameOnCard.setValue("Sahdeo Jaiswal")

            const addExpiryMonth = await $(`span*=01`)
            await addExpiryMonth.click()

            await browser.pause(500)

            const selectMonth = await $("[class='a-nostyle a-list-link']")
            await selectMonth.selectByVisibleText("06")

            await browser.pause(500)

            const addExpiryYear = await $("span*=2023")
            await addExpiryYear.click()

            await browser.pause(500)

            const selectYear = await $(`#pp-6Eqtwd-20_1`)
            await selectYear.selectByVisibleText("2028")

        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Amazon/Screenshots/${error}.png`)
            throw error;
        }
    };

}

export { PaymentDetails }