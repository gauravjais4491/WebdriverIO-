import { CatalogPage } from "./CatalogPage";
import { ProductDetailsPage } from "./ProductDetailsPage";
import { ViewCartPage } from "./ViewCartPage";
import { ShoppingAddressPage } from "./ShoppingAddressPage";
import { PaymentPage } from "./PaymentPage";
import { PaymentDetailsPage } from "./PaymentDetailsPage";

describe("Home Page", () => {
    let startTime;
    before(() => {
        startTime = new Date();
    });
    
    after(() => {
        const endTime = new Date();
        const totalTime = endTime - startTime;
        console.log(`Total time taken: ${totalTime}ms`);
    });
    
    it("should place an order", async () => {

        await browser.url("https://testvagrant.myshopify.com/")
        await $('a*=Shop all').click();

        const catalogPage = new CatalogPage()
        await catalogPage.goToProductDetailsPage()
        
        
        const productDetailsPage = new ProductDetailsPage();
        await productDetailsPage.addProductToCart()
        
        const viewCartPage = new ViewCartPage()
        await viewCartPage.goToViewCartPage();

        const shoppingAddressPage = new ShoppingAddressPage()
        await shoppingAddressPage.addContactDetails()
        await shoppingAddressPage.addShippingAddress()
        await shoppingAddressPage.goToPaymentPage()

        const paymentPage = new PaymentPage()
        await paymentPage.goToPaymentDetailsPage()

        await browser.pause(5000)

        const paymentDetailsPage = new PaymentDetailsPage()
        await paymentDetailsPage.addPaymentDeatils()

        await browser.url("/")
        await browser.pause(10000)
        // await browser.pause(10000)
        
    })
})

