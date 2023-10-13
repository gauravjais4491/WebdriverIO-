describe("windowsManagement Demo", () => {
    it("should navigate window", async () => {
        await browser.url("https://google.com")

        await browser.newWindow("https://ultralesson.ai/")

        await browser.newWindow("https://chat.openai.com/")

        await browser.newWindow("https://peopleplus.zoho.com/testvagrant/zp#services/listing")

        const windowHandles = await browser.getWindowHandles()  //i won't update number of window even if i close a window. if you want to update you have to declare another valiable to update the getwindiwHandles
        
        await browser.switchToWindow(windowHandles[1])
        await browser.closeWindow()  // it will close the window i am present

        await browser.switchToWindow(windowHandles[3])
        await browser.pause(10000)
    })
})