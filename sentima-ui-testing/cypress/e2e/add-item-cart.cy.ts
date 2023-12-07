import * as sentima from '../page-object-model/sentima-functions'; 

const email: string = "gfn@gmail.com"; 
const country : string = "Spain"; 
const firstName: string = "ghj"; 
const lastName: string = "fn"; 
const addressInput: string = "241"; 
const dressName: string = "Sofia Dress";
const payNow : string = "Pay now";  


describe('Adds a product to the cart and checks out', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      
      console.log('Cypress detected uncaught exception: ', err);
      return false
    }); 
    cy.visit('/') //visits page  
  })
  
  
  it('adds item to the cart and proceeds to checkout', () => {
    sentima.addDressToCart(dressName); 
    sentima.continueToCart(); 
    sentima.assertsCheckoutPage(payNow); 
  })

  it('fills up basic details in cart', () => {
    sentima.addDressToCart(dressName); 
    sentima.continueToCart();
    sentima.fillPiiData(email ,country , firstName, lastName, addressInput);
  })

  it.only('removes insurance and confirms correct item price ', () => {
    sentima.getsItemPriceHomepage(); 
    sentima.addDressToCart(dressName); 
    sentima.continueToCart(); 
    sentima.removeInsurance(); 
    sentima.assertsCorrectPrice(); 

  })
    
})

