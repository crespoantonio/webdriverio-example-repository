const Page = require('../pageobjects/page')

class HomePage extends Page{
    get inputUserName(){return $('#user-name')}
    get inputPassword(){return $('#password')}
    get btnLogin(){return $('#login-button')}
    get msgError(){return $('h3')}

    open(){
        return super.open('/')
    }

    maxWindow(){
        return super.maximizeWindow()
    }

    login (username, password){
        this.inputUserName.setValue(username);
        this.inputPassword.setValue(password);
        this.btnLogin.click();
    }
}

module.exports = new HomePage();