import * as sentima from '../page-object-model/sentima-functions';
import { faker } from '@faker-js/faker';

const firstName: string = faker.person.firstName(); 
const lastName: string = faker.person.lastName(); 
const userEmail =  faker.internet.email({ firstName: firstName, lastName: lastName , provider: 'gmail.com'}); 
const country: string = 'Spain';
const addressInput: string = '241';
const payNow: string = 'Pay now';
const dressSelected: number = 1;

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
    sentima.fillPiiData(userEmail, country, firstName, lastName, addressInput);
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
