import * as sentima from '../page-object-model/sentima-functions';

const payNow: string = 'Pay now';
const dressSelected: number = 0; 


describe('Adds a product to the cart and checks out', () => {
  beforeEach(() => {
    cy.viewport(400, 768);
    cy.visit('/'); //visits page
  });

  it('adds item to the cart and proceeds to checkout', () => {
    sentima.addDressToCart(dressSelected);
    sentima.continueFromCart();
    sentima.assertsCheckoutPage(payNow);
  });
});
