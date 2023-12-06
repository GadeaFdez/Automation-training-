import * as selectors from './selectors'

export const selectCategoryDogWalking = (categoryInput: string ) => {
    cy.get(selectors.CATEGORY_INPUT_FIELD).type(categoryInput);
    cy.get(selectors.DOG_WALKING_CATEGORY).click();
    cy.get(selectors.SELLER_GET_STARTED_BUTTON).click();
}

export const selectSellerLocation = (sellerLocation: string) => {
    cy.get(selectors.SELLER_LOCATION_INPUT).type(sellerLocation);
    cy.get(selectors.DUBLIN_LOCATION_DROPDOWN).click(); 
    cy.get(selectors.SELLER_SUBMIT_LOCATION).click();
}

export const fillPIIData = (sellerName: string, sellerCompanyName: string , sellerEmail: string ) => {
    cy.get(selectors.SELLER_NAME).type(sellerName);
    cy.get(selectors.SELLER_COMPANY_NAME).type(sellerCompanyName);
    cy.get(selectors.SELLER_COMPANY_EMAIL).type(sellerEmail);
    cy.get(selectors.SELLER_WEBSITE_YES).click();
    cy.get(selectors.SELLER_EMPLOYEES_2_10).click(); 
    cy.get(selectors.SELLER_SUBMIT_PII_DATA).click(); 
}

export const changesServicesMaximiseLeadsPage = (category: string) => {
    cy.get(selectors.SERVICE_SUGGESTION_CROSS_MAXIMISE_LEADS_PAGE).click(); 
    cy.get(selectors.SERVICE_SEARCH_INPUT_MAXIMISE_LEADS_PAGE).type(category); 
    cy.get(selectors.SERVICE_SELECTION_CATEGORY_MAXIMISE_LEADS_PAGE).click();  
    cy.get(selectors.NEW_SERVICE_TAG_MAXIMISE_LEADS_PAGE).should('contain', category)
}

export const submitNewSeller = () => {
    cy.get(selectors.SEE_LEADS_MAXIMISE_LEADS_PAGE).click();
}

export const assertAccountCreated = (leads: string) => {
    cy.get(selectors.LEADS_NAVBAR).should('contain', leads);

}