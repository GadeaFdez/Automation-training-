import * as selectors from '../page-object-model/selectors'; 

const email: string = "gfn@gmail.com"; 
const country : string = "Spain"; 
const firstName: string = "ghj"; 
const lastName: string = "fn"; 
const addressInput: string = "241"; 
const dressName: string = "Sofia Dress"; 


describe('Adds a product to the cart and checks out', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      
      console.log('Cypress detected uncaught exception: ', err);
      return false
    }); 
    cy.visit('/') //visits page  
  })
  
  
  it.only('visits sentima website and an item to the cart ', () => {
    cy.get(selectors.SOFIA_DRESS_HOMEPAGE).click(); // chooses a dress 
    cy.get(selectors.MEDIUM_SIZE).click(); // chooses a size 
    cy.get(selectors.ADD_TO_CART).click(); //adds choice to the cart
    cy.get(selectors.CART_LIST).should('contain', dressName); //asserts that the dress has been added to the cart 
    cy.get(selectors.SHIPPING_PROTECTION_TOGGLE).click(); 
    cy.get(selectors.CART_CHECKOUT).click(); 
    cy.get(selectors.UPSELL_MODAL_CONTINUE).click(); 
  })

  it('fills up basic details in cart', () => {
  cy.get(selectors.SOFIA_DRESS_HOMEPAGE).click(); // chooses a dress 
  cy.wait(2000); 
  //cy.get(selectors.SOFIA_DRESS_PRICE); 
  cy.get(selectors.MEDIUM_SIZE).click(); // chooses a size 
  cy.get(selectors.ADD_TO_CART).click(); //adds choice to the cart
  cy.get(selectors.CART_LIST).should('contain', dressName); //asserts that the dress has been added to the cart 
  
  cy.get(selectors.CART_CHECKOUT).click(); 
  cy.get(selectors.UPSELL_MODAL_CONTINUE).click(); 
  cy.get(selectors.EMAIL_INPUT_CHECKOUT).type(email); 
  cy.get(selectors.COUNTRY_DROPDOWN_CHECKOUT).select(country)
  cy.get(selectors.FIRST_NAME_INPUT_CHECKOUT).type(firstName); 
  cy.get(selectors.LAST_NAME_INPUT_CHECKOUT).type(lastName); 
  cy.get(selectors.ADDRESS_DROPDOWN_CHECKOUT).type(addressInput); 
  cy.wait(1000); 
  cy.get(selectors.FULL_ADDRESS_CHECKOUT).click();
  //cy.get(selectors.TOTAL_PRICE_CHECKOUT).should('eq', '@price'); 
})
    
})

