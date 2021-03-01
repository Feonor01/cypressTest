const locators = require("../fixtures/locatorsCreateGallery.json")
const data = require("../fixtures/data.json")
const locatorsOne = require("../fixtures/locators.json")

describe("Test data", () => {
    before(() => {
        cy.visit('https://gallery-app.vivifyideas.com/create')
        //cy.get("a[href='/login']").click()
    })

    it('Create Negative test', () => {
        cy.get(locatorsOne.createGallery.title).type(data.loginRegister.title)
        cy.get(locatorsOne.createGallery.title).type(data.loginRegister.title)
        cy.get(locatorsOne.register.button).click()
        cy.get('.form-check-input').should('be.checked')
        cy.get('.alert').should("contain", "The password confirmation does not match.")
        //cy.url().should('eq', 'https://gallery-app.vivifyideas.com1111/')
       //cy.get(locators.login.submit).should("not.exist")
    })

it('register', () => {
        cy.get(locatorsOne.register.firstName).type(data.loginRegister.firstName)
        cy.get(locatorsOne.register.lastName).type(data.loginRegister.lastName)
        cy.get(locatorsOne.register.email).type(data.loginRegister.email)
        cy.get(locatorsOne.register.password).type(data.loginRegister.dataPassword)
        cy.get(locatorsOne.register.confirmPassword).type(data.loginRegister.confirmPass)
        cy.get(locatorsOne.register.check).check()
        cy.get(locatorsOne.register.button).click()
        cy.get('.form-check-input').should('be.checked')
        cy.get('.alert').should("contain", "The password confirmation does not match.")
        //cy.url().should('eq', 'https://gallery-app.vivifyideas.com1111/')
       //cy.get(locators.login.submit).should("not.exist")
    })

    //it('login', () => {
        //cy.get(locators.login.email).type(data.loginRegister.email)
        //cy.get(locators.login.password).type(data.loginRegister.dataPassword)
       // cy.get(locators.login.submit).click()
        //cy.url().should('eq', 'https://gallery-app.vivifyideas.com1111/')
       //cy.get(locators.login.submit).should("not.exist")
    //})


    // it("Click on create gallery button", () => {
    //     cy.get('a[href="/create"]').click()
    // })
    // it('Create Gallery', () => {
    //     cy.get(locators.gallery.title).type(data.createGallery.title)
    //     cy.get(locators.gallery.description).type(data.createGallery.description)
    //     cy.get(locators.gallery.image).type(data.createGallery.url)
    //     cy.get(locators.gallery.button).click()
    //})
    // it('All gallery filter', () => {
    //     cy.get(locators.allGallery.filter).type('inje')
    //     cy.get(locators.allGallery.buttonFilter).click()
    // })
    // it('All gallery load more', () => {
    //     cy.get(locators.allGallery.loadMore).click()
    // })
})