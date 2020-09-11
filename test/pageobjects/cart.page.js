const Page = require('../pageobjects/page')

class CartPage extends Page{
    get itemsOnCart(){return $$('#cart_contents_container div.cart_item')}

    open(){
        return super.open('/cart.html')
    }
}

module.exports = new CartPage();