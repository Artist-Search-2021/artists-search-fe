import React from 'react';
import { fireEvent, render, getByPlaceholderText, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

import { MemoryRouter } from 'react-router-dom';

describe('artistSearch', () => {
  it('displays a list of artists', async ()  => {
    render(
      <MemoryRouter  initialEntries={['/']}>
        <App />
      </MemoryRouter>
    ); 
    // const { asFragment } = render(
    //   <Search/>
    // );

    // expect(asFragment()).toMatchSnapshot();
    
    screen.getByText('Search artists');
    const input = screen.getByPlaceholderText('Search artist');
    fireEvent.change(input, { target: { value: 'Prince' } });  
    expect(input.value).toBe('Prince');
    // fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' });
    fireEvent.submit(input);
    const list = await screen.findByRole('list');
    expect(list).not.toBeEmptyDOMElement();
    expect(list.children.length).toEqual(25);
 
  });
  it('displays a list of recordings', async ()  => {
    render(
      <MemoryRouter  initialEntries={['/artist/070d193a-845c-479f-980e-bef15710653e']}>
        <App />
      </MemoryRouter>
    ); 
    const list = await screen.findByRole('list');
    expect(list).not.toBeEmptyDOMElement();
    expect(list.children.length).toEqual(12);

    console.log(list);
  });
});
