//Contains the functions 
import * as selectors from './selectors';
export const fillStudentName = (nameInput: string) => {
    cy.get(selectors.STUDENT_NAME_INPUT_TEXT).type(nameInput); 
};
export const fillStudentEmail = (emailInput: string ) => {
    cy.get(selectors.STUDENT_EMAIL_INPUT_TEXT).type(emailInput); 
};
export const fillStudentCurrentAddress = (currentAddressInput: string) => {
    cy.get(selectors.STUDENT_CURRENT_ADDRESS_INPUT_TEXT).type(currentAddressInput); 
};
export const fillStudentPermanentAddress= (permanentAddressInput: string) => {
    cy.get(selectors.STUDENT_PERMANENT_ADDRESS_INPUT_TEXT).type(permanentAddressInput); 
};
export const submitStudent = () => {
    cy.get(selectors.SUBMIT).click({force: true}); 
};
export const assertStudentName = (nameOutput: string) => {
    cy.get(selectors.STUDENT_NAME_OUTPUT_TEXT).contains (nameOutput); 
};
export const assertStudentEmail = (emailOutput: string) => {
    cy.get(selectors.STUDENT_EMAIL_OUTPUT_TEXT).contains (emailOutput);
};
export const assertStudentCurrentAddress = (currentAddressOutput: string ) => {
    cy.get(selectors.STUDENT_CURRENT_ADDRESS_OUTPUT_TEXT).contains(currentAddressOutput);
};
export const assertStudentPermanentAddress = (permanentAddressOutput: string) => {
    cy.get(selectors.STUDENT_PERMANENT_ADDRESS_OUTPUT_TEXT).contains(permanentAddressOutput); 
};
//Selectors second challenge + some reused from the previous challenge 
export const fillStudentFirstName = (firstName: string) => {
    cy.get(selectors.STUDENT_FIRST_NAME_INPUT).type(firstName); 
};
export const fillStudentLastName = (lastName: string) => {
    cy.get(selectors.STUDENT_LAST_NAME_INPUT).type(lastName);
};
export const fillStudentGender = () => {
    cy.get(selectors.STUDENT_GENDER_INPUT).check({force: true});
};
export const fillStudentPhoneNumber = (phoneNumber: string) => {
    cy.get(selectors.STUDENT_PHONE_NUMBER_INPUT).type(phoneNumber); 
};
export const fillStudentBirthday = (birthdayMonth: string, birthdayYear: string) => {
    cy.get(selectors.STUDENT_BIRTHDAY_INPUT).click(); 
    cy.get(selectors.STUDENT_BIRTHDAY_MONTH_INPUT).select(birthdayMonth); 
    cy.get(selectors.STUDENT_BIRTHDAY_YEAR_INPUT).select(birthdayYear); 
    cy.get(selectors.STUDENT_BIRTHDAY_DAY_INPUT).click(); 
};

export const addStudentBasicInformation = (firstName: string, lastName: string, phoneNumber: string, birthdayMonth: string, birthdayYear: string) => {
    fillStudentFirstName(firstName),
    fillStudentLastName(lastName),
    fillStudentGender(),
    fillStudentPhoneNumber(phoneNumber),
    fillStudentBirthday(birthdayMonth, birthdayYear)
}; 

export const fillStudentSubject = (subject: string) => {
    cy.get(selectors.STUDENT_SUBJECT_INPUT).type(subject);
    cy.get(selectors.STUDENT_SUBJECT_SELECTION_INPUT).click(); 
};
export const fillStudentHobbies = () => {
    cy.get(selectors.STUDENT_HOBBIES_INPUT).check({force: true});
};
export const fillStudentImage = (image: any) => {
    cy.get(selectors.STUDENT_IMAGE_INPUT).selectFile(image);
};
export const fillStudentState = () => {
    cy.get(selectors.STUDENT_STATE_INPUT).click({force: true});
    cy.get(selectors.STUDENT_STATE_SELECTION_INPUT).click();
};
export const fillStudentCity = () => {
    cy.get(selectors.STUDENT_CITY_INPUT).click({force: true}); 
    cy.get(selectors.STUDENT_CITY_SELECTION_INPUT).click({force: true}); 
};

export const fillStudentFullAddress = (currentAddressInput: string)=> {
    fillStudentCurrentAddress(currentAddressInput)
    fillStudentState(), 
    fillStudentCity()
}; 

export const assertModalView = () => {
    cy.get(selectors.OUTPUT_MODAL).should('be.visible');
};
export const assertModalHeading = (successMessage: string) => {
    cy.get(selectors.MODAL_HEADING).should('contain',successMessage); 
};
export const assertFullName = (firstName: string, lastName: string) => {
    cy.get(selectors.STUDENT_FULL_NAME_OUTPUT).should('contain', firstName).and('contain', lastName);
};
export const assertStudentEmailAddress = (userEmail: string) => {
    cy.get(selectors.STUDENT_EMAIL_ADDRESS_OUTPUT).should('contain', userEmail);
};
export const assertStudentGender= (userGender: string) => {
    cy.get(selectors.STUDENT_GENDER_OUTPUT).should('contain', userGender); 
};
export const assertStudentPhoneNumber = (phoneNumber: string) => {
    cy.get(selectors.STUDENT_PHONE_NUMBER_OUTPUT).should('contain', phoneNumber);
};
export const assertStudentBirthday= (birthdayDay: string, birthdayMonth: string, birthdayYear: string) => {
    cy.get(selectors.STUDENT_BIRTHDAY_OUTPUT).should('contain', birthdayMonth).and('contain', birthdayYear).and('contain', birthdayDay);
};
export const assertStudentSubject = (subject: string) => {
    cy.get(selectors.STUDENT_SUBJECT_OUTPUT).should('contain', subject); 
};
export const assertStudentHobbies = (hobby: string) => {
    cy.get(selectors.STUDENT_HOBBIES_OUTPUT).should('contain', hobby); 
};
export const assertStudentImage = (imageName: any) => {
    cy.get(selectors.STUDENT_IMAGE_OUTPUT).should('contain', imageName); 
};
export const assertStudentAddress = (address: string) => {
    cy.get(selectors.STUDENT_ADDRESS_OUTPUT).should('contain', address); 
};
export const assertStudentStateAndCity = (state: string, city: string) => {
    cy.get(selectors.STUDENT_STATE_CITY_OUTPUT).should('contain', state).and('contain', city); 
};