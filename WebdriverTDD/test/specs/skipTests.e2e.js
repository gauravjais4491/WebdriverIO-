describe("Skipping Test Demo", () => {
    before(async () => {
        await browser.url("/")
    });

    it("should Navigate to Base URL", async () => {

        const title = await browser.getTitle()
        console.log("--------------" + title + "---------------------")
    });

    it.skip("should Skip this Test", async () => {
        console.log("This Test will Skiiped! ")
    })
})