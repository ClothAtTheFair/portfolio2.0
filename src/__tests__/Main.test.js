import {Router} from 'react-router-dom'
import React from 'react'
import {createMemoryHistory} from 'history'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from '../Main'

test('full app rendering/navigating', () => {
    const history = createMemoryHistory()
    const {container, getByText} = render(
        <Router history={history}>
            <Main />
        </Router>
    )

    //Verify page content for the landing page
    expect(container.innerHTML).toMatch("Hi I'm Bradley,")

    fireEvent.click(getByText(/projects/i))

    expect(container.innerHTML).toMatch("Projects")
})