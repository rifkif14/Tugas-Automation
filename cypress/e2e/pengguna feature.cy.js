describe('user should be able to access pengguna feature', () => {

    it('with valid data', () => {
      cy.visit('https://kasiraja.ajikamaludin.id')
      cy.get('#email').type('toko@gmail.com')
      cy.get('#password').type('password123')
      cy.get('.chakra-button').click()

      // Access to pengguna dan tambah pengguna
      // 1. Click pengguna button
      // 2. Validate login page is appear
      // 3. Click tambah button
      // 4. Fill nama
      // 5. Fill deskripsi
      // 6. Click "simpan"
      cy.get('[href="/users"] > .css-1xmlai3').click()
      cy.get('.chakra-container').should('exist')
      cy.get('.chakra-button').click()
      cy.get('#nama').type('budi')
      cy.get('#email').type('budi@yahoo.com')
      cy.get('#password').type('budi123')
      cy.get('.css-l5lnz6').click()
      cy.get('.css-1khaxf9').should('exist')      
    
    })
  })
  