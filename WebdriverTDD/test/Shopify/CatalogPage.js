import { ProductDetailsPage } from "./ProductDetailsPage";

class CatalogPage {
    goToProductDetailsPage = async () => {
        try {
            await $("*=Activity Auto").click()
        } catch (error) {
            await browser.saveScreenshot(`/Users/user/Desktop/WebDriverIO/WebdriverTDD/test/Shopify/Screenshots/CatalogPage_${error}.png`)
            throw error;
        }
    }
}
export { CatalogPage }