class ProductDetailsPage {
    async addProductToCart() {
        try {
            const quantity__input = await $(".quantity__input");
            await quantity__input.waitForDisplayed();
            await quantity__input.setValue("4");

            const addToCartButton = await $("[type=submit]");
            await addToCartButton.waitForDisplayed({ timeout: 10000 });

            await addToCartButton.click();
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Shopify/Screenshots/ErrorOccuredInProductDetailsPage_${error}.png`);
            throw error;
        }

    }
}

export { ProductDetailsPage };
