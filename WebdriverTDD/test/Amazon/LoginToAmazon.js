class LoginToAmazon{
    async login(){
        await browser.url("https://www.amazon.in/")
        
        const goToSign = await $(".nav-line-1-container")
        await goToSign.click()

        const addPhoneNumber = await $("#ap_email")
        await addPhoneNumber.setValue("9431037737")

        const continueToSignIn = await $("#continue")
        await continueToSignIn.click();

        const addPassword = await $("#ap_password")
        await addPassword.setValue("@Allen4491")
    }
    async goToHomePage(){
        const signInSubmit = await $("#signInSubmit")
        await signInSubmit.click()
    }

}
export{LoginToAmazon}