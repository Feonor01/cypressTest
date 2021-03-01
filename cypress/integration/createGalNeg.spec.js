const locators = require("../fixtures/locatorsCreateGallery.json")
const data = require("../fixtures/data.json")


describe("Test data", () => {
    
    before(() =>{
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get(locators.login.navigationLogin).click()
    })
    
    it('login', () => {
        cy.get(locators.login.email).type(data.loginRegister.email)
        cy.get(locators.login.password).type(data.loginRegister.dataPassword)
        cy.get(locators.login.submit).click()
        //cy.url().should('eq', 'https://gallery-app.vivifyideas.com1111/')
       //cy.get(locators.login.submit).should("not.exist")
    })

    // it('create', () => {
    //     cy.visit('https://gallery-app.vivifyideas.com/create/')
    // })

    it('Create Negative test', () => {
        cy.get('a[href="/create"]').click()
        cy.get(locators.gallery.title).type(data.createGallery.title)
        cy.get(locators.gallery.description).type(data.createGallery.description)
        cy.get(locators.gallery.image).type(data.createGallery.url)
        cy.get(locators.gallery.button).click()
        //cy.get('.form-check-input').should('be.checked')
        // cy.get(".alert")
        // .should("contain", "The title must be at least 2 characters.")
        // .and('have.class', 'alert-danger')
        // .and('have.css', "color", "rgb(114, 28, 36)")
        cy.get("#title").should("have.length", 2)
        //createGallery.titleLessThan1Char.should("contain", errorMessages.createGallery.lessThan1Char)
    })

})