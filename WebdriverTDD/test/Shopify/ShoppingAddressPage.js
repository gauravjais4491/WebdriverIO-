class ShoppingAddressPage {
    async addContactDetails() {

        try {
            const addEmailInTextBox = await $("#email")
            await addEmailInTextBox.waitForDisplayed({ timeout: 10000 });
            await addEmailInTextBox.setValue("gauravjais4491@gmail.com")

            const checkUpdateNewsAndOfferButton = await $("[type=checkbox]")
            await checkUpdateNewsAndOfferButton.waitForDisplayed({ timeout: 10000 })
            await checkUpdateNewsAndOfferButton.click()

        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Shopify/Screenshots/ErrorOccuredInAddContactDetails_${error}.png`)
            throw error;
        }
    };

    async addShippingAddress() {
        try {
            const addFirstName = await $("[name=firstName]")
            await addFirstName.waitForDisplayed({ timeout: 10000 });
            await addFirstName.setValue("Gaurav")

            const addLastName = await $("[name=lastName]")
            await addLastName.waitForDisplayed({ timeout: 10000 });
            await addLastName.setValue("Jaiswal")

            const addDeliveryAddress = await $("[name=address1]")
            await addDeliveryAddress.waitForDisplayed({ timeout: 10000 });
            await addDeliveryAddress.setValue("TestVagrant Technology")

            const addOptionalAddress = await $("[name=address2]")
            await addOptionalAddress.waitForDisplayed({ timeout: 10000 });
            await addOptionalAddress.setValue("Near Mi Showroom")

            const addCity = await $("[name=city]")
            await addCity.waitForDisplayed({ timeout: 10000 });
            await addCity.setValue("Banglore")

            const addState = await $("#Select1")
            await addState.waitForDisplayed({ timeout: 10000 });
            await addState.click()
            await addState.selectByVisibleText("Karnataka")

            const addPostalCode = await $("[name=postalCode]")
            await addPostalCode.waitForDisplayed({ timeout: 10000 });
            await addPostalCode.setValue("560078")

            const addInformationForNextTime = await $("[name=save_shipping_information]")
            await addInformationForNextTime.waitForDisplayed({ timeout: 10000 });
            await addInformationForNextTime.click()
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Shopify/Screenshots/ErrorInAddShippingAddress_${error}.png`)
            throw error;
        }
    };

    async goToPaymentPage() {
        try {
            const continue_To_Shooping_Button = await $('button[type=submit]')
            await continue_To_Shooping_Button.waitForDisplayed({ timeout: 10000 });
            await continue_To_Shooping_Button.click();
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Shopify/Screenshots/ErrorInGoToPaymentPage_${error}.png`)
            throw error;
        }

    }
}
export { ShoppingAddressPage }