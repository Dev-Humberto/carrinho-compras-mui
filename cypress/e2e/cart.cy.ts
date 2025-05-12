describe('Carrinho de Compras', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve adicionar itens ao carrinho', () => {
    // Verifica que o carrinho está vazio inicialmente
    cy.get('[data-testid="cart-badge"]').should('contain', '0')

    // Adiciona o primeiro produto ao carrinho
    cy.get('[data-testid="product-card"]').first().find('button').click()

    // Verifica que o badge foi atualizado
    cy.get('[data-testid="cart-badge"]').should('contain', '1')

    // Abre o carrinho
    cy.get('[data-testid="cart-button"]').click()

    // Verifica que o item está no carrinho
    cy.get('[data-testid="cart-item"]').should('have.length', 1)
  })

  it('Deve atualizar a quantidade de itens no carrinho', () => {
    // Adiciona um produto ao carrinho
    cy.get('[data-testid="product-card"]').first().find('button').click()
    cy.get('[data-testid="cart-button"]').click()

    // Aumenta a quantidade
    cy.get('[data-testid="increase-quantity"]').click()
    cy.get('[data-testid="quantity-input"]').should('have.value', '2')

    // Verifica o total
    cy.get('[data-testid="cart-total"]').should('contain', 'R$')
  })

  it('Deve remover itens do carrinho', () => {
    // Adiciona um produto ao carrinho
    cy.get('[data-testid="product-card"]').first().find('button').click()
    cy.get('[data-testid="cart-button"]').click()

    // Remove o item
    cy.get('[data-testid="remove-item"]').click()

    // Verifica que o carrinho está vazio
    cy.get('[data-testid="empty-cart"]').should('exist')
    cy.get('[data-testid="cart-badge"]').should('contain', '0')
  })

  it('Deve finalizar a compra com sucesso', () => {
    // Adiciona um produto ao carrinho
    cy.get('[data-testid="product-card"]').first().find('button').click()
    cy.get('[data-testid="cart-button"]').click()

    // Finaliza a compra
    cy.get('[data-testid="checkout-button"]').click()

    // Verifica o dialog de sucesso
    cy.get('[data-testid="success-dialog"]').should('be.visible')
    cy.get('[data-testid="success-dialog"]').should('contain', 'Compra finalizada!')
  })
})