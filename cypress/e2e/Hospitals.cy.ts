describe("Hospitals", () => {
  it("Should play video, pause, and display hospital images", () => {
    // User start at first page
    cy.visit("/");
    cy.wait(3000);
    // check if video exist
    cy.get("video").should("exist");
    // check if video is playing
    cy.get("video").should("have.prop", "paused", false);

    // wait 5 sec.
    cy.wait(5000);

    // click pause button
    cy.get("#play-button").click();
    // check if video is paused
    cy.get("video").should("have.prop", "paused", true);

    // Go to /hospital
    cy.get("#select-hospital-button").click();
    cy.wait(3000);

    // Check if exist atleast 3 image
    cy.get("img").should("have.length.at.least", 3);
  });
});
