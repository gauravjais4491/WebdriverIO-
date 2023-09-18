class ShippingAddress {
    async addShippingAddress() {
        try {
            const addShippingAddress = await $("#add-new-address-popover-link")
            await addShippingAddress.waitForDisplayed({ timeout: 10000 })
            await addShippingAddress.click()

            const addName = await $("#address-ui-widgets-enterAddressFullName")
            await addName.setValue("Gaurav Jaiswal")

            await browser.pause(500)

            const addPhoneNumber = await $("#address-ui-widgets-enterAddressPhoneNumber")
            await addPhoneNumber.setValue("9431037737")

            await browser.pause(500)

            const addPincode = await $("#address-ui-widgets-enterAddressPostalCode")
            await addPincode.setValue("560008")

            await browser.pause(500)

            const addAddress = await $("#address-ui-widgets-enterAddressLine1")
            await addAddress.setValue("Testvagrant Technologies Pvt Ltd, 12th Main, Hal 2nd Stage,Indiranagar")

            // const selectSuggestedAddress = await $(`[class="a-section a-spacing-base adddress-ui-widgets-form-field-container address-ui-widgets-field-container-fixed-height:nth-child(1)"]`)

            await browser.pause(500)

            const addArea = await $("#address-ui-widgets-enterAddressLine2")
            await addArea.setValue("100 Feet Road, 3rd floor")

            await browser.pause(500)

            const addLandmark = await $("#address-ui-widgets-landmark")
            await addLandmark.setValue("Near Mi Showroom")

            await browser.pause(500)

            const setAddresstoDefaultCheckBox = await $("#address-ui-widgets-use-as-my-default")
            await setAddresstoDefaultCheckBox.click()

            await browser.pause(500)
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Amazon/Screenshots/${error}.png`)
            throw error;
        }
    };

    async goToPaymentDetails() {
        try {
            const saveAddress = await $("#address-ui-widgets-form-submit-button")
            await saveAddress.click()

            await browser.pause(10000)

        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Amazon/Screenshots/${error}.png`)
            throw error;
        }
    };

}
export { ShippingAddress }