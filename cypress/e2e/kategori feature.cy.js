describe('user should be able to access kategori feature', () => {

    it('with valid data', () => {
      cy.visit('https://kasiraja.ajikamaludin.id')
      cy.get('#email').type('toko@gmail.com')
      cy.get('#password').type('password123')
      cy.get('.chakra-button').click()

      // Access to kategori dan tambah kategori
      // 1. Click kategori button
      // 2. Validate login page is appear
      // 3. Click tambah button
      // 4. Fill nama
      // 5. Fill deskripsi
      // 6. Click "simpan"
      cy.get('[href="/categories"] > .css-1xmlai3').click()
      cy.get('.chakra-container').should('exist')
      cy.get('.css-1piskbq').click()
      cy.get('#nama').type('makanan')
      cy.get('#deskripsi').type('barang yang dikonsumsi')
      cy.get('.chakra-button').click()
      cy.get('.css-1khaxf9').should('exist')

      
    
    })
  })
  