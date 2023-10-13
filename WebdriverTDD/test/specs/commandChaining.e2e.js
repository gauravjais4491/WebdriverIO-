// describe("Command Chaining Test", () =>{
//     it('should chain commands', async() => {
//         await browser.url("/")
//         const search = await $(".modal__toggle-open icon icon-search")
//         await search.click()
//         search.setValue("15mm Combo Wrench")
//         // search.sendKeys("Enter")
//         await browser.pause(10000)
//     })
// })

describe("Command Chaining Test", () => {
    it('should chain commands', async () => {
        await browser.url("/");
        const search = await $(".modal__toggle-open.icon.icon-search"); // Corrected selector
        await search.click();
        const searchInput = await $("#Search-In-Modaliot"); // Assuming this is the selector for the search input field
        await searchInput.setValue("15mm Combo Wrench");
        await browser.keys('Enter'); // Simulate pressing the Enter key
        await browser.pause(10000);
    });
});

