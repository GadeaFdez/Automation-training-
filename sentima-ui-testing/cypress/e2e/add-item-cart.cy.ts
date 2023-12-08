import * as sentima from '../page-object-model/sentima-functions'; 

const email: string = "gfn@gmail.com"; 
const country : string = "Spain"; 
const firstName: string = "ghj"; 
const lastName: string = "fn"; 
const addressInput: string = "241"; 
const payNow : string = "Pay now";  



describe('Adds a product to the cart and checks out', () => {
  beforeEach(() => {
    cy.visit('/')  

  })
  
  it.only('adds item to the cart and proceeds to checkout', () => {    
    sentima.getsItemNameHomepage(); 
    sentima.addDressToCart(); 
    sentima.assertDressInCart(); 
    sentima.continueFromCart(); 
    //sentima.assertsCheckoutPage(payNow); 
  })

  it('fills up basic details in cart', () => {
    sentima.addDressToCart(); 
    sentima.continueFromCart();
    sentima.fillPiiData(email ,country , firstName, lastName, addressInput);
  })

  it('removes insurance and confirms correct item price ', () => {
    sentima.getsItemPriceHomepage(); 
    sentima.getsItemNameHomepage(); 
    sentima.addDressToCart(); 
    sentima.continueFromCart(); 
    sentima.removeInsurance(); 
    sentima.assertsCorrectName(); 
    sentima.assertsCorrectPrice(); 
  })
    
})

