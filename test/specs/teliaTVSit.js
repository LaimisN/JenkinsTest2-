describe('TeliaTv login ', () => {
    it('should login with valid credentials', async () => {
        browser.url ('https://tv-sit.telia.lt/login')
        expect(browser).toHaveTitle('Telia TV');
        // await browser.pause(2000);
        const loginButton = $('[data-w-button="loginButton"]');
        loginButton.click();
        // await browser.pause(4000);
        const inputUsername = $('#Username')
        const inputPassword = $('#Password')
        const SecondLoginButton = $('#login')
    
        await inputUsername.setValue('472277')
        await inputPassword.setValue('7890')
        await SecondLoginButton.click()
        await browser.pause(5000)
            const starttime = new Date().getTime()
            await browser.pause(2000)
            const endtime = new Date().getTime()
            console.log(endtime - starttime) // outputs: 3000
    });
});


