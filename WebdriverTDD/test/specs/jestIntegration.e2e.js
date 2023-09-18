describe("Jest Integration Demo", () => {
    it("should demintrate use of Jest Framework", async () => {
        await browser.url("/");
        const title = await browser.getTitle();
        expect(title).toBe("ul-web-playground")
    })
})