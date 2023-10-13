import { expect } from "chai"

describe('CSS Extraction Test - Detailed', () => {
    it('should extract CSS properties and verify their values', async () => {
        await browser.url('https://web-playground.ultralesson.com/');
        const header = await $('a*=View all');
        const headerColor = await header.getCSSProperty('color');
        expect(headerColor.parsed.hex).to.equal('#ffffff');

        const searchInput = await $('.modal__toggle-open.icon.icon-search');
        const searchInputBgColor = await searchInput.getCSSProperty('background-color');
        expect(searchInputBgColor.parsed.hex).to.equal('#000000');

        const searchButton = await $('.search-modal__content');
        const searchButtonFontSize = await searchButton.getCSSProperty('font-size');
        expect(searchButtonFontSize.value).to.equal('16px');
    });
});