import { assert, expect } from 'chai';

describe("Dept Dive in Chai Assertion", () => {
    it("should demonstrate the usage of various Chai assertions", async () => {
        // Arrange
        await browser.url("/")

        // Act
        const expectedTitle = await browser.getTitle()

        const titleContainsSpecialCharacterOrNot = "^[A-Za-z0-9\s]*$";
        const expectedTitleForSpecialCharacterOrNot = expectedTitle;

        const home = await $("span*=Home");
        await home.getText()

        // Assert
        assert.equal(expectedTitle, 'ul-web-playground', "title is not Matching")

        assert.equal(expectedTitleForSpecialCharacterOrNot, "ul-web-playground", "Title Contains Special Character")

        expect(await home.isDisplayed()).to.be.true
        expect(await home.isClickable()).to.be.true;

    })
})