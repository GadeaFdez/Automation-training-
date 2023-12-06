import { faker } from '@faker-js/faker';
import *  as sellerSignUp from "../page-object-model/seller-signup-page";

const categoryInput: string = "Dog"; 
const categoryMaximiseLeads: string = "Pet Sitting"
const sellerLocation: string = " Dublin"; 
const sellerName: string = faker.person.fullName(); 
const sellerCompanyName: string = sellerName + "'s company "; 
const date =  String(Math.floor(Date.now()/0.3)); 
const sellerEmail =  faker.internet.email({ firstName: sellerName, lastName: date , provider: 'bark.com'}); 
const leads = "Leads"; 


describe('Check Join as Professional', () => {

  it('should assert signup as a new professional ', () => {
    cy.visit('https://qa-7.d.bark.com/en/ie/sellers/create/');
    sellerSignUp.selectCategoryDogWalking(categoryInput);
    sellerSignUp.selectSellerLocation(sellerLocation); 
    sellerSignUp.fillPIIData(sellerName, sellerCompanyName, sellerEmail);
    sellerSignUp.changesServicesMaximiseLeadsPage(categoryMaximiseLeads); 
    sellerSignUp.submitNewSeller(); 
    sellerSignUp.assertAccountCreated(leads); 
  })

})