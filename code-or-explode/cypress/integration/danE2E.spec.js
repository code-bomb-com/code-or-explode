


describe('App goes to desk page and then goes to info-tech-page', () => {
    it('loads the desk page', () => {
        cy.visit('http://localhost:3000/#/desk')   
    }) 
    it('clicks the div "Wires"', function() {
        cy.visit('http://localhost:3000/#/info-tech-page')
        cy.contains('Wires').click()
    })
    it('clicks the div "Keypad"', function() {
        cy.visit('http://localhost:3000/#/info-tech-page')
        cy.contains('Keypad').click()
    })
    it('clicks the div "Maze"', function() {
        cy.visit('http://localhost:3000/#/info-tech-page')
        cy.contains('Maze').click()
    })
    it('clicks the div "Memory"', function() {
        cy.visit('http://localhost:3000/#/info-tech-page')
        cy.contains('Memory').click()
    })
})