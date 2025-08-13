describe('login', () => {
  beforeEach(() => {
     // Arrange
    cy.visit('/')
    cy.screenshot('apos-visitar-pagina')

  })
  
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Act
    cy.fazerLoginComCredenciaisValidas()
   

    //cy.screenshot('apos-clicar-no-botao-entrar')

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
    
  })

   it('Login com dados inválidos deverá apresentar mensagem de erro', () => {
    // Act
    cy.fazerLoginComCredenciaisInvalidas()

    // Assert
    //cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')

  })
})