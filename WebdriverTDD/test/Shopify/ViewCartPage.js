class ViewCartPage {
    async goToViewCartPage() {
        try {
            const cartNotificationButton = $("#cart-notification-button");
            await cartNotificationButton.waitForDisplayed({ timeout: 10000 });
            await cartNotificationButton.click();

            const checkout = await $("#checkout");
            await checkout.waitForDisplayed({ timeout: 10000 });
            await checkout.click();
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Shopify/Screenshots/ErrorInViewCartPage_${error}.png`)
            throw error;
        }
    }
}
export { ViewCartPage }