

describe('webdriver.io page', () => {
    it('Should be able to add Fox Racing Black Helmet item to Shopping Cart', () => {
        browser.url('https://brave-goldberg-04dea0.netlify.app/latergear/')

        const timer = 5000;
        const productName = 'Fox Racing black Helmet'

        // Opening Shopping Cart
        browser.pause(timer)
        const shoppingCartButton = $('#ember55').$('.cSC--button')
        shoppingCartButton.click()

        // Validating that the Shopping Cart list is empty
        $('.cSC--list').waitForExist({ timeout: timer });
        const shoppingCartListBeforeAdd = $('.cSC--list').$$('li')
        const sizeBeforeAdd = shoppingCartListBeforeAdd.length
        expect(sizeBeforeAdd).toEqual(0)

        //Closing Shipping Cart
        const shoppingCartCloseButton = $('#ember55').$('.cSC--header__btn')
        shoppingCartCloseButton.waitForClickable({ timeout: timer });
        shoppingCartCloseButton.click()

        // Selecting item from the list and clicking it
        const hardcodedHelmetItem = $('#ember37')
        hardcodedHelmetItem.waitForClickable({ timeout: timer });
        hardcodedHelmetItem.click()

        // Adding Item do Cart
        const addToCartButton = $('.cDT--post__btnMobile')
        browser.pause(timer) // Wait for Clickable doesn't seem to work on this element
        addToCartButton.click();

        // Validating that item was added
        browser.pause(timer)
        const shoppingCartListAfterAdd = $('.cSC--list').$$('li')
        const sizeAfterAdd = shoppingCartListAfterAdd.length

        // Validating that said one item is the correct one
        const itemInCartName = shoppingCartListAfterAdd[0].$('.cSC--li__title')
        const itemInCartQuantity = parseInt(shoppingCartListAfterAdd[0].$('.cSC--li__quantity').getText())

        /*
            Counting <li> items inside the <ul>
            Counting how many instances of the product were added
         */
        expect(sizeAfterAdd - sizeBeforeAdd).toEqual(1)
        expect(itemInCartQuantity).toEqual(1)
        
        // Validating the name of the expected product
        expect(itemInCartName).toHaveText(`${productName}`) // verifying the name of the expected product
    })
})