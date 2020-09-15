const data = require('../helpers/data.json')
const HomePage = require('../pageobjects/home.page');
const InventoryPage = require('../pageobjects/inventory.page')
const CartPage = require('../pageobjects/cart.page')

describe('My project portfolio in WebDriverIO', ()=>{

    before(()=>{
        HomePage.maximizeWindow();
        HomePage.open();
    })
    
    it('Should not login with invalid credentials', ()=>{
        HomePage.login(data.homePage.lockUser, data.homePage.password);
        expect(HomePage.msgError).toHaveTextContaining(data.homePage.msgError)
    });

    it('Should login with valid credentials', ()=>{
        HomePage.login(data.homePage.username, data.homePage.password);
        expect(browser).toHaveUrlContaining(data.inventoryPage.url)
        expect(InventoryPage.firstItemInventory).toHaveText(data.inventoryPage.sortProducts.default)
    });
        
    it('Should sort products A to Z', ()=>{
        InventoryPage.selectProductSortContainer.selectByAttribute('value', 'az');
        expect(InventoryPage.firstItemInventory).toHaveText(data.inventoryPage.sortProducts.default);
    });
    
    it('Should sort products Z to A', ()=>{
        InventoryPage.selectProductSortContainer.selectByAttribute('value', 'za');
        expect(InventoryPage.firstItemInventory).toHaveText(data.inventoryPage.sortProducts.zToA)
    });
    
    it('Should sort products for Price (Low to High)', ()=>{
        InventoryPage.selectProductSortContainer.selectByAttribute('value', 'lohi');
        expect(InventoryPage.firstItemInventory).toHaveText(data.inventoryPage.sortProducts.lToH)
    });
    
    it('Should sort products for Price (High to Low)', ()=>{
        InventoryPage.selectProductSortContainer.selectByAttribute('value', 'hilo');
        expect(InventoryPage.firstItemInventory).toHaveText(data.inventoryPage.sortProducts.hToL)
    });

    it('Should add 3 item to the cart', ()=>{
        for(let i=0; i<=3; i++){
            InventoryPage.addNewItem(i)
        }
        CartPage.open();
        expect(CartPage.itemsOnCart).toHaveLength(4);
    });

    it('Should Logout', ()=>{
        InventoryPage.logout()
        expect(browser).toHaveUrlContaining(data.homePage.url)
    });
});