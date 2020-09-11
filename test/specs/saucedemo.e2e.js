const data = require('../helpers/data.json')
const HomePage = require('../pageobjects/home.page');
const InventoryPage = require('../pageobjects/inventory.page')

describe('My project portfolio on WebDriverIO', ()=>{
    before(()=>{
        HomePage.maximizeWindow();
    });
    
    beforeEach(()=>{
        HomePage.open();
    })

    it('Should login with valid credentials', ()=>{
        HomePage.login(data.homePage.username, data.homePage.password);
        expect(browser).toHaveUrlContaining(data.inventoryPage.url)
        expect(InventoryPage.firstItemInventory).toHaveText(data.inventoryPage.sortProducts.default)
    });

    it('Should not login with invalid credentials', ()=>{
        HomePage.login(data.homePage.lockUser, data.homePage.password);
        expect(HomePage.msgError).toHaveTextContaining(data.homePage.msgError)
    });

    it('Should Logout', ()=>{
        HomePage.login(data.homePage.username, data.homePage.password);
        InventoryPage.logout()
        expect(browser).toHaveUrlContaining(data.homePage.url)
    })
});