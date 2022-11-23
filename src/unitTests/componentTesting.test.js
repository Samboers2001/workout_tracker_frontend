/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/svelte';
import Home from '../components/Home.svelte'
import Register from '../components/Register.svelte';


// test if home renders
test('should render', () => {
    const results = render(Home);
    expect(() => results.getByText('Show more')).not.toThrow();
})

// test if register renders
test('should render', () => {
    const results = render(Register);
    expect(() => results.getByPlaceholderText('Email')).not.toThrow();
})

// test if show more actually shows more :)
test('should show more', async () => {
    render(Home);
    const button = screen.getByText('Show more');
    expect(() => screen.findByText('Register')).rejects
    await fireEvent.click(button)
    expect(screen.getByText('Register')).toHaveTextContent('Register')
})

