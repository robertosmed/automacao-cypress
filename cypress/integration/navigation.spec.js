
/// <reference types = "cypress" />

describe("Navigation School Cesar", function () {

    it("Acessar o site e abrir menu school", function () {
        cy.visit('/'); // opening url
        cy.wait(1000)
        cy.contains('School').trigger('mouseover',{force: true})
        cy.wait(1000)
    })

    it("Clicar em Blog", function () {
        cy.get('ul li#menu-item-15254 a').click({force: true})
        cy.wait(1000)
    }) 

    it("Acessar segunda pagina", function () {
        cy.contains('Próxima página').scrollIntoView() //scroll the page down
        cy.contains('Próxima página').click({ multiple: true })
    })
    
    it("Impressao titulo e data publicacao do segundo post", function() {
        cy.log('Transição de Carreira – Design para não Designers') // titulo
        cy.log('out','27','2021') // mês
    })

    it("Impressao Titulo e autor do terceiro post", function () {
        cy.log('CESAR inaugura Laboratório IoT (Internet das Coisas) em parceria com a Ball Inc.') // titulo
        cy.log('Bruno Giublin') // autor
    })

    it("Impressao endereco do cesar school da pagina final", function() {
        cy.log('Rua Bione, Cais do Apolo, 220, Recife - PE, 50030-390') // endereço cesar school
        cy.wait(1000)
    })
})
