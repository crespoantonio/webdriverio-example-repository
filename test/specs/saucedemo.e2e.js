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
    });

    it('Should sort products A to Z', ()=>{
        HomePage.login(data.homePage.username, data.homePage.password);
        InventoryPage.selectProductSortContainer.selectByAttribute('value', 'az');
        expect(InventoryPage.firstItemInventory).toHaveText(data.inventoryPage.sortProducts.default);
    });

    it('Should sort products Z to A', ()=>{
        HomePage.login(data.homePage.username, data.homePage.password);
        InventoryPage.selectProductSortContainer.selectByAttribute('value', 'za');
        expect(InventoryPage.firstItemInventory).toHaveText(data.inventoryPage.sortProducts.zToA)
    });

    it('Should sort products for Price (Low to High)', ()=>{
        HomePage.login(data.homePage.username, data.homePage.password);
        InventoryPage.selectProductSortContainer.selectByAttribute('value', 'lohi');
        expect(InventoryPage.firstItemInventory).toHaveText(data.inventoryPage.sortProducts.lToH)
    });

    it('Should sort products for Price (High to Low)', ()=>{
        HomePage.login(data.homePage.username, data.homePage.password);
        InventoryPage.selectProductSortContainer.selectByAttribute('value', 'hilo');
        expect(InventoryPage.firstItemInventory).toHaveText(data.inventoryPage.sortProducts.hToL)
    });
});