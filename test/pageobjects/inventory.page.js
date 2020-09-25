const Page = require('../pageobjects/page')

class InventoryPage extends Page {
    get btnMenu(){return $('#menu_button_container div:nth-child(3) button')}
    get divMenuSideRight(){return $('.bm-menu')}
    get aAllItems(){return $('inventory_sidebar_link')}
    get aLogout(){return $('#logout_sidebar_link')}
    get aResetApp(){return $('logout_sidebar_link')}
    get firstItemInventory(){return $('.inventory_list > :nth-child(1) .inventory_item_name')}
    get selectProductSortContainer(){return $('.product_sort_container')}
    get findItem(){return $$('.pricebar > button')}

    open(){
        return super.open('/inventory.html');
    }

    openMenu(){
        this.btnMenu.click();
        expect(this.divMenuSideRight).toBeVisible();
    }

    selectAllItems(){
        this.openMenu();
        this.aAllItems.click();
    }

    logout(){
        this.openMenu();
        this.aLogout.click();
    }

    resetApp(){
        this.openMenu();
        this.resetApp.click();
    }

    addNewItem(item){
        this.findItem[item].click();
        expect(this.findItem[item]).toHaveText('REMOVE');
    }

    orderyByAttribute(value){
        this.selectProductSortContainer.selectByAttribute('value', value)
    }
}

module.exports = new InventoryPage();