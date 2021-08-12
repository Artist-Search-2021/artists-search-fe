import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), 
  useLocation: () => ({
        
        
    'pathname': '/release/21e8c81d-6d12-48a9-ad47-b371ca2c166b',
    'search': '',
    'hash': '',
    'state': {
      'artistName': {
        'pathname': '/artist/0743b15a-3c32-48c8-ad58-cb325350befa',
        'state': {
          'artistName': 'blink‐182'
        },
        'search': '',
        'hash': '',
        'key': 'fzjh2b'
      }
    },
    'key': '97cgva'
      
  })
}));

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

    
  });

  it('displays a list of song titles', async () => {
    

    render(
      <MemoryRouter initialEntries={['/release/21e8c81d-6d12-48a9-ad47-b371ca2c166b']}>
        <App />
      </MemoryRouter>
    );
   
    setTimeout(async () => {
      const list = await screen.findByRole('list');
      expect(list).not.toBeEmptyDOMElement();
      expect(list.children.length).toEqual(8);     
    }, 1000);
  });

 
});

// {
//   'state': {
//     'artistName': {
//       'pathname': '/artist/0743b15a-3c32-48c8-ad58-cb325350befa',
//       'state': {
//         'artistName': 'blink‐182'
//       },
//       'search': '',
//       'hash': '',
//       'key': 'fzjh2b'
//     }
//   }
// }
