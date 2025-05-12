declare global {
  namespace Cypress {
    interface Chainable {
      addProductToCart(productId: number): Chainable<void>
    }
  }
}

Cypress.Commands.add('addProductToCart', (productId: number) => {
  cy.get(`[data-testid="add-to-cart-${productId}"]`).click()
})