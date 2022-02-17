///<reference types="cypress" />

describe("Funcionalidade Página de Produtos", () => {
  beforeEach(() => {
    
    cy.visit("produtos/");
  });
  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]') //Classe/id/
      //.first()
      //.last()
      //.eq(3)
      .contains("Ariel Roll Sleeve Sweatshirt")
      .click();
  });

  it("Deve adicionar um produto no carrinho", () => {
    var quantidade = 5

    cy.get('[class="product-block grid"]')
    .contains("Ariel Roll Sleeve Sweatshirt").click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
  });

  it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
    cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Red', 3)
  });

  it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
    cy.addProdutos('Argus All-Weather Tank', 'XS', 'Gray', 7)
  });
});
