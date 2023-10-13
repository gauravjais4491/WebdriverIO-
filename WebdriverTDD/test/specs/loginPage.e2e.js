import { expect } from "chai";

describe("Place Order Successfully - End to End Test", () => {
    it("should place order successfully", async () => {
        await browser.url("/")
        const login = await $(`[class="header__icon header__icon--account link focus-inset small-hide"]`)
        await login.click()
        const createAccount = await $(`//*[@id="customer_login"]/a[2]`)
        await createAccount.click()

        await $("#RegisterForm-FirstName").waitForDisplayed({ timeout: 10000 });

        const addFirstName = $("#RegisterForm-FirstName")
        await addFirstName.setValue("Gaurav")

        const addLastName = $("#RegisterForm-LastName")
        await addLastName.setValue("Jaiswal")

        const addEmail = $("#RegisterForm-email")
        await addEmail.setValue("gauravjais44@gmail.com")

        const setPassword = $("#RegisterForm-password")
        await setPassword.setValue("@Allen4491")

        const createBtn = $("button*=Create")
        await createBtn.click()

        await $(`a*=12 Ti Xelium Skis`).waitForDisplayed({timeout:10000})

        const searchBtn = await $(`.header__search`)
        await searchBtn.click()


        await browser.pause(10000)
    });
});