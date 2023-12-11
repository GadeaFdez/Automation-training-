import * as sentima from '../page-object-model/sentima-functions';

const email: string = 'gfn@gmail.com';
const country: string = 'Spain';
const firstName: string = 'ghj';
const lastName: string = 'fn';
const addressInput: string = '241';
const payNow: string = 'Pay now';
const dressSelected: number = 0; 

describe('Adds a product to the cart and checks out', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('adds item to the cart and proceeds to checkout', () => {
    sentima.getsItemNameHomepage(dressSelected);
    sentima.addDressToCart(dressSelected);
    sentima.assertDressInCart();
    sentima.continueFromCart();
    sentima.assertsCheckoutPage(payNow); 
  });

  it('fills up basic details in cart', () => {
    sentima.addDressToCart(dressSelected);
    sentima.continueFromCart();
    sentima.fillPiiData(email, country, firstName, lastName, addressInput);
  });

  it('removes insurance and confirms correct item price ', () => {
    sentima.getsItemPriceHomepage(dressSelected);
    sentima.getsItemNameHomepage(dressSelected);
    sentima.addDressToCart(dressSelected);
    sentima.continueFromCart();
    sentima.removeInsurance();
    sentima.assertsCorrectName();
    sentima.assertsCorrectPrice();
  });
});
