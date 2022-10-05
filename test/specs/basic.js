const assert = require('assert')

describe('First Jenkins tests', () => {
    it('should have the right title', async () => {
        await browser.url('https://webdriver.io')
        const title = await browser.getTitle()

        const starttime = new Date().getTime()
        await browser.pause(9000)
        const endtime = new Date().getTime()
        console.log(endtime - starttime) // outputs: 3000

        assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
    })
})