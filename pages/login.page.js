const { Page } = require('./page').default;

const usernameField = '#username';
const passwordField = '#password';
const loginBtn = 'button[type="submit"]';
const flash = '#flash';

class LoginPage extends Page{
    constructor(page){
        super(page);
        this.page = page;
    }

    async setUsername(usernameValue){
        await this.setValue(usernameField, usernameValue);
    }

    async setPassword(passwordValue){
        await this.setValue(passwordField, passwordValue);
    }

    async clickLoginBtn(){
        await this.clickElement(loginBtn);
    }

    async getFlash(){
        return await this.getElement(flash);
    }

}

module.exports = LoginPage;