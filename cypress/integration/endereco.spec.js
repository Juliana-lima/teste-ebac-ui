///<reference types="cypress" />
import EnderecoPage from "../support/page-objects/endereco.page";
//import EnderecoPage from "../fixtures/endereco.json" ou por const
const dadosEndereco = require("../fixtures/endereco.json");

describe("Funcionalidade endereços - Faturamento e Entrega", () => {
  beforeEach(() => {
    cy.visit("minha-conta/");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
  });
  it("Deve fazer cadastro de faturamento com sucesso", () => {
    EnderecoPage.editarEnderecoFaturamento(
      "Maria",
      "Testadora",
      "EBAC",
      "Brasil",
      "Avenida São João",
      305,
      "Campinas",
      "São Paulo",
      25658748,
      "11987478800",
      "email4@dominio.com"
    );
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso."
    );
  });

  it("Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados ", () => {
    EnderecoPage.editarEnderecoFaturamento(
        dadosEndereco[2].nome,
        dadosEndereco[2].sobrenome,
        dadosEndereco[2].empresa,
        dadosEndereco[2].pais,
        dadosEndereco[2].endereco,
        dadosEndereco[2].numero,
        dadosEndereco[2].cidade,
        dadosEndereco[2].estado,
        dadosEndereco[2].cep,
        dadosEndereco[2].telefone,
        dadosEndereco[2].email,
        )
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso."
    );
  });
});
