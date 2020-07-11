import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import projects from '../Projects'
import Projects from '../Projects'

test('title Appears', async () => {
    const { getByText, findByText } = render(<Projects />)

    getByText((content, element) => content.startsWith('Projects Overview'))

});