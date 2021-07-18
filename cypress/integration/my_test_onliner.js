describe("Test1", () => {
    it("it_1", () => {
        cy.visit("/");
        cy.get("span.b-main-navigation__text").eq(0).click();
        cy.url().should("contain", "https://catalog.onliner.by/")
    });

    it("it_2", () => {
        cy.visit("/");
        cy.get("span.b-main-navigation__text").eq(0).click();
        cy.url().should("contain", "https://catalog.onliner.by/1");
    })
})
