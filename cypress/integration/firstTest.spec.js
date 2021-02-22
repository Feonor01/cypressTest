describe("Login test", () => {
    it("Visit gallery page", ()=> {//gallery-app.vivifyideas.com
        cy.visit("/")
        cy.wait(1000)
    })
    it("Click on login button", () => {
        cy.get('.nav-link').eq(1).click();
    })

    it("Login with valid credential", () => {
        cy.get("#email").type("marko_stojanovski@ymail.com")
        cy.get("#password").type("tunel324%")
        cy.get("button").click()
    })
    it("Logout", ()=> {
        cy.get(".ml-auto > :nth-child(3) > .nav-link").click()
    })
})