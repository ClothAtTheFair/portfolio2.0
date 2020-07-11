import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../Home';

test('title Appears', async () => {
    const { getByText, findByText } = render(<Home />)

    getByText((content, element) => content.startsWith('Placeholder'))

});