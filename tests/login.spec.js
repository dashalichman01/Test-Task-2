require('dotenv').config();
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login.page.js');
const generator = require('../helper/generator.js');

let loginPage

const randomUsername = generator.randomUserName();
const randomPassword = generator.randomPassword();

test.describe('Login page', ()=> {
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.openUrl('');
    });

    test('should login with correct username and password', async ({ page })=>{
        await loginPage.setUsername(process.env.CORRECT_USERNAME);
        await loginPage.setPassword(process.env.CORRECT_PASSWORD);
        await loginPage.clickLoginBtn();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
        await expect(await loginPage.getFlash()).toBeVisible();
        await expect(await loginPage.getFlash()).toContainText('You logged into a secure area!');
    })

    test('should login with incorrect username data', async ()=>{
        await loginPage.setUsername(randomUsername);
        await loginPage.setPassword(process.env.CORRECT_PASSWORD);
        await loginPage.clickLoginBtn();
        await expect(await loginPage.getFlash()).toBeVisible();
        await expect(await loginPage.getFlash()).toContainText('Your username is invalid!');
    })

    test('should login with incorrect password data', async ()=>{
        await loginPage.setUsername(process.env.CORRECT_USERNAME);
        await loginPage.setPassword(randomPassword);
        await loginPage.clickLoginBtn();
        await expect(await loginPage.getFlash()).toBeVisible();
        await expect(await loginPage.getFlash()).toContainText('Your password is invalid!');
    })

})