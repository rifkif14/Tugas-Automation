describe('user should be able to access penjualan dan pembelian feature', () => {

    it('with valid data', () => {
      cy.visit('https://kasiraja.ajikamaludin.id')
      cy.get('#email').type('toko@gmail.com')
      cy.get('#password').type('password123')
      cy.get('.chakra-button').click()

      // Access to penjualan feature
      // 1. Click penjualan button
      // 2. Validate login page is appear
      cy.get('[href="/sales"] > .css-1xmlai3').click()
      cy.get('.chakra-container').should('exist')
      
      // Access to pembelian feature
      // 1. Click pembelian button
      // 2. Validate login page is appear
      cy.get('[href="/purchases"] > .css-1xmlai3').click() 
      cy.get('.chakra-container').should('exist')

      //Validasi
      cy.get('#menu-button-11').should('exist')
    })
  })
  