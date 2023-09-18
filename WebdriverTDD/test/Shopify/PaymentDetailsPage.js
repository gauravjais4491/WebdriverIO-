class PaymentDetailsPage {
    async addPaymentDeatils() {
        try {
            let iframe_number = await $("//*[@class='card-fields-iframe' and @title='Field container for: Card number']");
            await browser.switchToFrame(iframe_number);

            const number = await $("#number")
            await number.waitForDisplayed({ timeout: 10000 })
            await number.addValue("1125")

            await browser.switchToParentFrame();

            let iframe_name = await $("//*[@class='card-fields-iframe' and @title='Field container for: Name on card']");
            await browser.switchToFrame(iframe_name);


            const name = await $("#name")
            await name.waitForDisplayed({ timeout: 10000 })
            await name.waitForClickable({ timeout: 10000 })
            await name.addValue("Gaurav")

            await browser.switchToParentFrame();

            
            let iframe_expiry = await $("//*[@class='card-fields-iframe' and @title='Field container for: Expiration date (MM / YY)']");
            await browser.switchToFrame(iframe_expiry);

            const expiryMonth = await $(`[name="expiry"]`)
            await expiryMonth.waitForDisplayed({ timeout: 10000 })
            await expiryMonth.waitForClickable({ timeout: 10000 })
            await expiryMonth.setValue("01")
            await expiryMonth.addValue("28")

            await browser.switchToParentFrame();

            let iframe_Security = await $(`//*[@class='card-fields-iframe' and @title='Field container for: Security code']`)
            iframe_Security.switchToFrame(iframe_Security);

            const verification_value = await $(`[name="verification_value"]`)
            await verification_value.waitForDisplayed({ timeout: 10000 })
            await verification_value.waitForClickable({ timeout: 10000 })
            await verification_value.setValue("111")

            await browser.switchToParentFrame();

            const payBtn = await $(`[class="QT4by _1fragemew rqC98 hodFu _7QHNJ VDIfJ j6D1f janiy"]`)
            await payBtn.click()

            // await browser.pause(10000)
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Shopify/Screenshots/ErrorOccuredInPaymentDetailsPage_${error}.png`)
            throw error;
        }

    }
}
export { PaymentDetailsPage }