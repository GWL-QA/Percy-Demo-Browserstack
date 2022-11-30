const percySnapshot = require('@percy/webdriverio');


describe('Capture Spanshot', () => {
    it('Should capture all pages', async () => {
        await browser.url("https://dev-wev.pantheonsite.io/explore-entrepreneurship/");
        await browser.execute("var element = document.getElementsByTagName('BODY')[0];"+"var parent = element.parentNode;"+"var wrapper = document.createElement('div');"+"wrapper.className='canvasWrapper';"+"parent.replaceChild(wrapper, element);"+"wrapper.appendChild(element);")
        await browser.pause(30000)
        await percySnapshot('1-page')
    });
});

