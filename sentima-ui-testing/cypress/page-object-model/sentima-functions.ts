import * as selectors from './selectors'; 

export const addDressToCart = (dressName: string) => {
    cy.get(selectors.SOFIA_DRESS_HOMEPAGE).click(); // chooses a dress 
    cy.get(selectors.MEDIUM_SIZE).click(); // chooses a size 
    cy.get(selectors.ADD_TO_CART).click(); //adds choice to the cart
    cy.get(selectors.CART_LIST).should('contain', dressName); //asserts that the dress has been added to the cart 
}

export const dismissUpsell = () => { 
    cy.get(selectors.UPSELL_MODAL_CONTINUE).click(); //continues to checkout from upsell modal 

}
export const continueToCart = () => {
    cy.get(selectors.CART_CHECKOUT).click(); //continues to cart from cart 
    dismissUpsell(); 
}
export const assertsCheckoutPage = (payNow: string) => {
    cy.get(selectors.PAY_NOW_CHECKOUT).should('contain', payNow); 

}

export const removeInsurance = () => {
    cy.get(selectors.CART_LINK).click(); 
    cy.get(selectors.REMOVE_INSURANCE).click() //delete insurance 
    cy.get(selectors.CONTINUE_TO_CHECKOUT).click(); 
    dismissUpsell(); 
}

export const fillPiiData = (email: string ,country: string , firstName: string, lastName: string, addressInput: string) => {
    cy.get(selectors.EMAIL_INPUT_CHECKOUT).type(email); 
    cy.get(selectors.COUNTRY_DROPDOWN_CHECKOUT).select(country)
    cy.get(selectors.FIRST_NAME_INPUT_CHECKOUT).type(firstName); 
    cy.get(selectors.LAST_NAME_INPUT_CHECKOUT).type(lastName); 
    cy.get(selectors.ADDRESS_DROPDOWN_CHECKOUT).type(addressInput); 
    cy.wait(1000); 
    cy.get(selectors.FULL_ADDRESS_CHECKOUT).click();
}

export const getsItemPriceHomepage = () => {
    cy.get(selectors.SOFIA_DRESS_PRICE).invoke('text').as('price').then(console.warn);//aims to get the price of the item as saves it as price 
}

export const assertsCorrectPrice = () => {
cy.get(selectors.TOTAL_PRICE).invoke('text').should ('eq', '@price'); 

}