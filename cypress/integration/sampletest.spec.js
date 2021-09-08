describe("sample suite to verify the realHover method", function () {

    it("realHover Test", function () {

        cy.visit("https://demoqa.com/menu#");
        // cy.get(".navbar__tutorial-menu").click();

        //Now hovering over two elements.
        cy.get("#nav > :nth-child(1) > a").realHover();
        cy.get("#nav > :nth-child(2) > :nth-child(1)").realHover();

        // Reloading the screen and you can see that the second element is still expanded
        cy.reload();
        


    });

});