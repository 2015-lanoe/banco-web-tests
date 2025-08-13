describe('Tranferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor validos', () =>{
        //ACT
        cy.realizarTransferencia('João', 'Maria', 10)
        
        //ASSERT
        //cy.get('.toast').should('have.text', 'Transferência realizada!')
        cy.verificarMensagemNoToast('Transferência realizada!')        
    })

    it('Deve apresentar quando tentar transferir mais que 5 mil sem o token', () =>{
        //ACT
        cy.realizarTransferencia('João', 'Maria', 6000)
        
        //ASSERT
        //cy.get('.toast').should('have.text', 'Transferência realizada!')
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
        
    })
 })

    

