import React from 'react'
import Display from '../../src/display/Display'

describe('Gate', () => {    
    it('should default to unlocked and open ', () => {
        cy.mount(<Display />)
        cy.get(Display)
            .its('state')
    })
})