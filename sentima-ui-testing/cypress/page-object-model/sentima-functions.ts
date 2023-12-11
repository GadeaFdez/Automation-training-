import * as selectors from "./selectors";

let nameDressHomepage: string;
let priceSaleHomepage: string;

export const getsItemNameHomepage = () => {
  cy.get(selectors.DRESS_NAME_CARD_HOMEPAGE)
    .eq(2)
    .find(selectors.DRESS_NAME_ANCHOR_HOMEPAGE)
    .then(($text) => {
      nameDressHomepage = $text.text();
    });
};

export const getsItemPriceHomepage = () => {
  cy.get(selectors.DRESS_PRICE_HOMEPAGE)
    .eq(2)
    .then(($text) => {
      priceSaleHomepage = $text.text();
    });
};

export const addDressToCart = () => {
  cy.get(selectors.SOFIA_DRESS_HOMEPAGE).click();
  cy.get(selectors.MEDIUM_SIZE).click(); // chooses a size
  cy.get(selectors.ADD_TO_CART).click(); //adds choice to the cart
};

export const assertDressInCart = () => {
  cy.get(selectors.CART_LIST).then(($text) => {
    const nameDressCart = $text.text();
    expect(nameDressHomepage).contains(nameDressCart);
  });
};

export const dismissUpsell = () => {
  cy.get(selectors.UPSELL_MODAL_CONTINUE).click(); //continues to checkout from upsell modal
};

export const continueFromCart = () => {
  cy.get(selectors.CART_CHECKOUT).click(); //continues to cart from cart
  dismissUpsell();
};
export const assertsCheckoutPage = (payNow: string) => {
  cy.get(selectors.PAY_NOW_CHECKOUT).should("contain", payNow);
};

export const removeInsurance = () => {
  cy.get(selectors.CART_LINK).click();
  cy.get(selectors.REMOVE_INSURANCE).click(); //delete insurance
  cy.get(selectors.CONTINUE_TO_CHECKOUT).click();
  dismissUpsell();
};

export const fillPiiData = (
  email: string,
  country: string,
  firstName: string,
  lastName: string,
  addressInput: string,
) => {
  cy.get(selectors.EMAIL_INPUT_CHECKOUT).type(email);
  cy.get(selectors.COUNTRY_DROPDOWN_CHECKOUT).select(country);
  cy.get(selectors.FIRST_NAME_INPUT_CHECKOUT).type(firstName);
  cy.get(selectors.LAST_NAME_INPUT_CHECKOUT).type(lastName);
  cy.get(selectors.ADDRESS_DROPDOWN_CHECKOUT).type(addressInput);
  cy.get(selectors.FULL_ADDRESS_CHECKOUT).click();
};

export const assertsCorrectName = () => {
  cy.get(selectors.DRESS_NAME_CHECKOUT_PAGE).then(($text) => {
    const nameDressCheckout = $text.text();
    expect(nameDressHomepage).contains(nameDressCheckout);
  });
};

export const assertsCorrectPrice = () => {
  cy.get(selectors.TOTAL_PRICE).then(($text) => {
    const totalPrice = $text.text();
    expect(priceSaleHomepage).contains(totalPrice);
  });
};
