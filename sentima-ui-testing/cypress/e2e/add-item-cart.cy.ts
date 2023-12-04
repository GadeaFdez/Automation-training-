describe('Adds a product to the cart and checks out', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      console.log('Cypress detected uncaught exception: ', err);
      return false
    }); 
  })
  
  
  it('visits sentima website and an item to the cart ', () => {
    cy.visit('https://sentimaco.com/'); //visits page  
    cy.get('#title-template--21049109610782__featured_collection-8628356284702').click(); // chooses a dress 
    cy.get('.PwzrButton-label-514').click(); // chooses a size 
    cy.get('#ProductSubmitButton-template--21049110102302__main').click(); //adds choice to the cart
    cy.get('.styles_ProductRow__productTitleAndVariant__On413').should('contain', "Sofia Dress"); //asserts that the dress has been added to the cart 
    cy.get('.upcart-checkout-button-container').click(); 
    cy.get('[data-testid="proceed"]').click(); 

    
  })

it.only('fills up basic details in cart', () => {

  cy.visit('https://sentimaco.com/'); //visits page  
  cy.get('#title-template--21049109610782__featured_collection-8628356284702').click(); // chooses a dress 
  cy.get('.PwzrButton-label-514').click(); // chooses a size 
  cy.get('#ProductSubmitButton-template--21049110102302__main').click(); //adds choice to the cart
  cy.get('.styles_ProductRow__productTitleAndVariant__On413').should('contain', "Sofia Dress"); //asserts that the dress has been added to the cart 
  cy.get('.upcart-checkout-button-container').click(); 
  cy.get('[data-testid="proceed"]').click(); 
  cy.get('#email').type("gfn@gmail.com"); 
  cy.get('#Select0').select('Spain')
  cy.get('#TextField10').type('ghj'); 
  cy.get('#TextField11').type('fn'); 
  cy.get('#shipping-address1').type('241'); 
  cy.wait(1000); 
  cy.get('#shipping-address1-option-1').click();
    
})
    


})