import * as studentForm from '../page-object-model/student-form';

const fullName = 'Gadea'; 
const email = 'gf@gmail.com'; 
const currentAddress = '1 Oxford street'; 
const permanentAddress = '1 Picadilly street'; 

describe('Check adding new user from Text Box page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err) => {
      // returning false here prevents Cypress from
      // failing the test
      console.log('Cypress detected uncaught exception: ', err);
      return false;
    });
    cy.visit('/text-box') //Not using the full URL because the og URL is set up in cypress.config.ts
  })
  it('should access Tools QA and assert the url', () => {
    cy.url().should('include', 'text-box'); 
  })
  
  it('Should find and fill up all text-boxes and submit', ()=> {
    studentForm.fillStudentName(fullName);
    studentForm.fillStudentEmail(email);
    studentForm.fillStudentCurrentAddress(currentAddress);
    studentForm.fillStudentPermanentAddress(permanentAddress);
    studentForm.submitStudent();
  })
  it('should add a user and check data is correct ', () => {
    studentForm.fillStudentName(fullName);
    studentForm.fillStudentEmail(email);
    studentForm.fillStudentCurrentAddress(currentAddress);
    studentForm.fillStudentPermanentAddress(permanentAddress);
    studentForm.submitStudent(); 
    studentForm.assertStudentName(fullName); 
    studentForm.assertStudentEmail(email); 
    studentForm.assertStudentCurrentAddress(currentAddress); 
    studentForm.assertStudentPermanentAddress(permanentAddress); 
  })
})