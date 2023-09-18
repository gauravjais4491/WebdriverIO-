import { LoginToAmazon } from "./LoginToAmazon"
import { HomePage } from "./HomePage"
import { SelectProductPage } from "./SelectProductPage"
import { ProductPage } from "./ProductPage"
import { AddToCart } from "./AddToCart"
import { ViewCartPage} from "./ViewCartPage"
import { ShippingAddress } from "./ShippingAddress"
import { PaymentDetails} from "./PaymentDetails"


describe("Amazon Website Automation", ()=> {

    let startTime;
    before(() => {
        startTime = new Date();
    });
    
    after(() => {
        const endTime = new Date();
        const totalTime = endTime - startTime;
        console.log(`Total time taken: ${totalTime}ms`);
    });

    it("should automate amazon website", async() => {

        const loginToAmazon = new LoginToAmazon()
        await loginToAmazon.login()
        await loginToAmazon.goToHomePage()

        const homePage = new HomePage()
        await homePage.goToSelectProductPage()

        const selectProductPage = new SelectProductPage()
        await selectProductPage.goToProductPage()

        const windowHandles = await browser.getWindowHandles()
        await browser.switchToWindow(windowHandles[1])

        const productPage = new ProductPage()
        await productPage.goToAddToCartPage()

        const addToCart = new AddToCart()
        await addToCart.goToViewCartPage()

        const viewCartPage = new ViewCartPage()
        await viewCartPage.setQuantity()
        await viewCartPage.goToShippingAddressPage()

        const shippingAddress = new ShippingAddress()
        await shippingAddress.addShippingAddress()
        await shippingAddress.goToPaymentDetails()

        const paymentDetails = new PaymentDetails()
        await paymentDetails.setPaymentMethod()
        await paymentDetails.goToCardDetails()
        await paymentDetails.addCardDetails()

        await browser.pause(10000)
        
    })
})