import * as sentima from '../page-object-model/sentima-functions'; 

const dressName: string = "Sofia Dress";
const payNow : string = "Pay now";  

describe('Adds a product to the cart and checks out', () => {

    beforeEach(() => {
        cy.viewport(400, 768); 
        cy.visit('/') //visits page  
      })

    it('adds item to the cart and proceeds to checkout', () => {
        sentima.addDressToCart(dressName); 
        sentima.continueToCart(); 
        sentima.assertsCheckoutPage(payNow); 
    })
})