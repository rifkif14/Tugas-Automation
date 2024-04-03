describe('user should be able to sign up and login', () => {

  it('with valid data', () => {
    // Registration
    // 1. Visit url
    // 2. Click text "ingin mencoba, daftar?"
    // 3. Validate register page is appear
    // 4. Fill nama toko
    // 5. Fill email
    // 6. Fill password
    // 7. Click daftar button

    cy.visit('https://kasiraja.ajikamaludin.id')
    cy.get('.css-4rvv7a > a').click()
    cy.get('.css-1w7v3tn').should('exist')
    cy.get('#name').type('toko14')
    cy.get('#email').type('toko@gmail.com')
    cy.get('#password').type('password123')
    cy.get('.css-1n8i4of').click()
    cy.clearCookies
    cy.reload

    // Login
    // 1. Visit url
    // 2. Validate login page is appear
    // 3. Fill email
    // 4. Fill password
    // 5. Click login button

    cy.visit('https://kasiraja.ajikamaludin.id')
    cy.get('.css-1w7v3tn').should('exist')
    cy.get('#email').type('toko@gmail.com')
    cy.get('#password').type('password123')
    cy.get('.chakra-button').click()
    cy.clearCookies
    cy.reload

    //Validasi
    cy.get('#menu-button-11').should('exist')
  })
})
