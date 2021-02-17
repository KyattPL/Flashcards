import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Link, Route } from 'react-router-dom';

import Routes from '../src/Routes.js';

test('Full header navigation', async () => {

    render(
        <MemoryRouter initialEntries={['/']}>
            <Routes />
        </MemoryRouter>
    );

    expect(screen.getAllByText(/Card info/i)[0]).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Flashcards/i));
    let result = await screen.findAllByText(/Card info/i);
    expect(result[0]).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Home/i));
    result = await screen.findAllByText(/Card info/i);
    expect(result[0]).toBeInTheDocument();

    fireEvent.click(screen.getByText(/About/i));
    result = await screen.findByText(/About test/i);
    expect(result).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Dashboard/i));
    result = await screen.findByText(/Dashboard test/i);
    expect(result).toBeInTheDocument();

    fireEvent.click(screen.getByText(/FAQ/i));
    result = await screen.findByText(/FAQ test/i);
    expect(result).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Log in/i));
    result = await screen.findByText(/Don't have an account?/i);
    expect(result).toBeInTheDocument();
});

test('Landing on a bad page', () => {
    render(
        <MemoryRouter initialEntries={['/wrong/route']}>
            <Routes />
        </MemoryRouter>
    );

    expect(screen.getByText(/Bad page/i)).toBeInTheDocument();
});