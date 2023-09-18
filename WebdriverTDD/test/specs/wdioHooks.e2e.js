describe("Nevigate to the base URL", () => {
    it("Should neviagte to base URL", async () => {
        await browser.url("/")
        const searchButton = await $('[class="modal__toggle-open icon icon-search"]');
        await searchButton.click()
        const searchInput = await $("#Search-In-Modal")
        await searchInput.setValue('WebDriverIO Hooks')
        await browser.pause(10000)
    })
})