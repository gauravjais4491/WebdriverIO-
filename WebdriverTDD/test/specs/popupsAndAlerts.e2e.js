describe("popupsAndAlerts",()=>{
    it("should PopUp", async()=>{
        await browser.url("https://the-internet.herokuapp.com/javascript_alerts")

        const clickForJSAlert = await $('[onclick="jsAlert()"]')
        await clickForJSAlert.click()
        await clickForJSAlert.acceptAlert()

        const successfully_Clicked = await $("#result")
        await successfully_Clicked.getText();
        await expect(successfully_Clicked).toHaveText("You successfully clicked an alert") 

        console.log("Text Succesfully Matched!")

        await browser.pause(10000)

        const clickforJSConfirm = await $('[onclick="jsConfirm()"]')
        await clickforJSConfirm.click()
        await clickforJSConfirm.dismissAlert()

        const successfully_Canceled = await $("#result")
        await successfully_Canceled.getText()
        await expect(successfully_Canceled).toHaveText("You clicked: Cancel")

        console.log('Text Successfully Canceled!')

        await browser.pause(10000)

        const clickForJSPrompt = await $(`[onclick="jsPrompt()"]`)
        await clickForJSPrompt.click()
        await clickForJSPrompt.sendAlertText("Heyyy")
        await clickForJSAlert.acceptAlert()

        const successfully_Inserted = await $("#result")
        await successfully_Inserted.getText()
        await expect(successfully_Inserted).toHaveText("You entered: Heyyy")

        console.log('Text Successfully Inserted!')
        
        await browser.pause(10000)
    })
})