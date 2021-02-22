describe("Register test", () => {
    it("Visit gallery page", ()=> {
        cy.visit("/")
    })
    it("Click on register button", ()=>{
        cy.get(":nth-child(2) > .nav-link").click()
    })

    it("Registration", () => {
        //cy.get("#first-name").type("")
        cy.get("#last-name").type("Stojanovski")
        cy.get("#email").type("marko_stojanovski1213@ymail.com")
        cy.get("#password").type("12345678")
        cy.get("#password-confirmation").type("12345678")
        cy.get(".form-check-input").check()
        cy.get(".btn").click()
    })

    it("Registration", () => {
        cy.get("#first-name").clear().type("Mare")
        cy.get("#last-name").clear().type("Stojanovski")
        cy.get("#email").clear().type("marko_stojanovski1234@ymail.com")
        cy.get("#password").clear().type("12345678")
        cy.get("#password-confirmation").clear().type("12345678")
        cy.get(".form-check-input").check()
        cy.get(".btn").click()
    })

})