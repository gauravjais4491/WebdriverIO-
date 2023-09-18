import { expect } from 'chai';

describe('Chai Test', () => {
    it('should assert the title of the webpage', async () => {
        await browser.url("/");
        const title = await browser.getTitle();
        expect(title).to.equal('ul-web-playground');
        await browser.pause(10000)
    });
});
