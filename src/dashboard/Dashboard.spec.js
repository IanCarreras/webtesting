// Test away
import React from 'react'
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from './Dashboard'

afterEach(rtl.cleanup);

describe('Gate', () => {
    const component = rtl.render(<Dashboard />)
    
    it('should default to unlocked and open ', () => {
    
        expect(component.instance().state)
    })
})