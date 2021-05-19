/// <reference types="Cypress" />

import trending from "../fixtures/trending.json"
import avengers from "../fixtures/avengers.json"
import newAvengers from "../fixtures/newAvengers.json"

let limit=10;
let offset=0;

describe("Testeando nuestra app",()=>{
    beforeEach(()=>{
        cy.visit("/")
    })
    it("Probando que la Home contenga los componentes correspondientes ",()=>{
        cy.get(".gifs-container-section")
        cy.get(".random-gif-container")
    })
    it("Probando si el buscador funciona",()=>{
        cy.get(".input-buscador").type("Avengers")
        cy.get(".boton-buscador").click()

    })
    it.skip("Probando si el boton de opcion nocturno/dia funciona correctamente",()=>{
        cy.get(".switch").click()
        cy.get("[data-test='app-container']").should("have.class","ligth")
        cy.get(".switch").click()
        cy.get("[data-test='app-container']").should("have.class","dark")
    })
    it("Mockeando trending gifs que aparecen en la home ",()=>{
        cy.intercept(`https://api.giphy.com/v1/gifs/trending?api_key=5f7wbKwbAW8jGWILRYbaJHmfKlHa2KlI&q&limit=20&offset=0`,trending)
        cy.visit("/")
        cy.get("[data-test-id='gifs-trending'] > img").should("have.length",3)
    })
    it("Probando que el buscador funciona como corresponde",()=>{
        cy.intercept(`https://api.giphy.com/v1/gifs/search?api_key=5f7wbKwbAW8jGWILRYbaJHmfKlHa2KlI&q=avengers&limit=${limit}&offset=${offset}&rating=g&lang=es`,avengers)
        cy.visit("/")
        cy.get('[ data-test-id="buscador"] > input').type("avengers")
        cy.get('[ data-test-id="buscador"] > button').click()
        cy.get('[data-test-id="gifs-searched"] > img' ).should("have.length",5)
        cy.intercept(`https://api.giphy.com/v1/gifs/search?api_key=5f7wbKwbAW8jGWILRYbaJHmfKlHa2KlI&q=avengers&limit=${limit}&offset=${offset+10}&rating=g&lang=es`,newAvengers)
        cy.get('[data-test-id="agregar-gifs"]').click()
        cy.get('[data-test-id="gifs-searched"] > img' ).should("have.length",10)
        
    })

})