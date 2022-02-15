///<reference types="cypress" />

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('mariateste1@teste.com.br')
        cy.get('#password').type('422070g#hLX')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, mariateste')
    })  
    
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () =>{
        cy.get('#username').type('mariste2@teste.com.br')
        cy.get('#password').type('422070g#hLX')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')

    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('400000LX')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. ')

    })
})