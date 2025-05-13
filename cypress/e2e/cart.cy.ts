describe('Carrinho de Compras', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Deve adicionar itens ao carrinho', () => {
    // Adiciona o primeiro produto ao carrinho
    cy.get('[data-testid="add-to-cart-1"]').click()

     // Abre o carrinho
    cy.get('[data-testid="cart-button"]').click()

  })

  it('Deve atualizar a quantidade de itens no carrinho', () => {
    // Adiciona um produto ao carrinho
    cy.get('[data-testid="add-to-cart-1"]').click()

    // Abre o carrinho
    cy.get('[data-testid="cart-button"]').click()

    // Aumenta a quantidade
    cy.get('[data-testid="increase-quantity-1"]').click()

  })

  it('Deve remover itens do carrinho', () => {
   // Adiciona um produto ao carrinho
    cy.get('[data-testid="add-to-cart-1"]').click()

    // Abre o carrinho
    cy.get('[data-testid="cart-button"]').click()

    // Remove o item
    cy.wait(2000);
    cy.get('[data-testid="remove-item-1"]').click()

  })

  it('Deve finalizar a compra com sucesso', () => {
    // Adiciona um produto ao carrinho
    cy.get('[data-testid="add-to-cart-1"]').click()
    cy.get('[data-testid="add-to-cart-2"]').click()

    // Abre o carrinho
    cy.get('[data-testid="cart-button"]').click()

    // Finaliza a compra
    cy.get('[data-testid="checkout-button"]').click()

  })
})